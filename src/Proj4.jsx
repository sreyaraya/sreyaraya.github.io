    import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import './proj4.css';
    import CodeSnippet from './CodeSnippet';
    import './CodeSnippet.css';
    import ImageDisplay from './ImageDisplay';
    // Import images from ./assets/proj2/1_1

    import screenshot1 from './assets/proj4/screenshot1.png';
    import screenshot2 from './assets/proj4/screenshot2.png';

    // Part 1 – Training progression (fox)
    import iter0_neural from "./assets/proj4/iter_0_neural.png";
    import iter200_neural from "./assets/proj4/iter_200_neural.png";
    import iter500_neural from "./assets/proj4/iter_500_neural.png";
    import iter800_neural from "./assets/proj4/iter_800_neural.png";
    import iter1500_neural from "./assets/proj4/iter_1500_neural.png";

    // Part 1 – Training progression (rose)
    import iter0_rose from "./assets/proj4/iter_0_rose.png";
    import iter200_rose from "./assets/proj4/iter_200_rose.png";
    import iter500_rose from "./assets/proj4/iter_500_rose.png";
    import iter800_rose from "./assets/proj4/iter_800_rose.png";
    import iter1500_rose from "./assets/proj4/iter_1500_rose.png";

    // 2×2 L/Width comparison
    import l3_w32 from "./assets/proj4/iter_1999_neural_l3_w32.png";
    import l3_w256 from "./assets/proj4/iter_1999_neural_l3_w256.png";
    import l10_w32 from "./assets/proj4/iter_1999_neural_l10_w32.png";
    import l10_w256 from "./assets/proj4/iter_1999_neural_l10_w256.png";

    // PSNR curves
    import psnr_fox from "./assets/proj4/pnsrs_neural.png";
    import psnr_rose from "./assets/proj4/pnsrs_rose.png";


    import viser1 from "./assets/proj4/viser1.png";
    import viser2 from "./assets/proj4/viser2.png";
    import training_lego from "./assets/proj4/lego-set.png";
    import legoOrbit from "./assets/proj4/lego_orbit.gif";
    import legolass from "./assets/proj4/lgLoss-final.png";

    import training_custom from "./assets/proj4/finalset.png";
    import loss_custom from "./assets/proj4/finalloss.png";
    import custom_orbit from "./assets/proj4/custom_object_novel_orbit.gif";



    export default function Proj() {
      return (
        //header
        <div>
          <h1>Project 4 Page</h1>
          <p>This following page is for 180 Project 4.</p>

          <div className="section">
            <h2>Part 0: Camera Calibration and 3D Scanning</h2>
            <p>Images of the outside of a building.</p>

            <div className="section">
  <h3>Part 0.1: Calibrating Your Camera</h3>
  <p>
    For this first subsection, I took photos of the calibration tags from multiple 
    different angles for a total of about 45 images. I then used the provided code, 
    along with some small adjustments, to detect and return both the image-space 
    and object-space corner coordinates.
  </p>
</div>

<div className="section">
  <h3>Part 0.2: Capturing a 3D Object Scan</h3>
  <p>
    I used a single cup (placed upside down to avoid interior shadows) and set it 
    on one of the printed ArUco tags. I then took roughly 45 photos from all 
    directions while maintaining similar distances and minimizing distortions.
  </p>
</div>

<div className="section">
  <h3>Part 0.3: Estimating Camera Pose</h3>
  <p>
    For this part, I implemented the pose estimation pipeline. Below is an excerpt 
    from my code that iterates over images, detects ArUco points, computes the 
    camera-to-world transform, and visualizes the camera frustums in Viser.
  </p>

  <pre><code>
{`i = 0
server = viser.ViserServer(share=True)
for filename in sorted(Path("resized_ducks/").glob("*.JPG")):
    filename = str(filename)
    print(i)
    i += 1

    img = read_img(filename, 1)
    H, W = img.shape[0], img.shape[1]

    # make points
    objPts, imgPts = process_aruco(img)
    if objPts is None or imgPts is None:
        continue

    # solve pnp
    s, r, t = cv2.solvePnP(objPts, imgPts, K, dist)
    if not s:
        print("solve failed")
        continue

    # c2w
    r, _ = cv2.Rodrigues(r)
    R_c2w = r.T
    t_c2w = -r.T @ t
    c2w = np.hstack([R_c2w, t_c2w])
    c2w = np.vstack([c2w, [0, 0, 0, 1]])
    c2ws.append(c2w)

    # visualize
    server.scene.add_camera_frustum(
        filename,
        fov=2 * np.arctan2(H / 2, K[0, 0]),
        aspect=W / H,
        scale=0.02,
        wxyz=viser.transforms.SO3.from_matrix(c2w[:3, :3]).wxyz,
        position=c2w[:3, 3],
        image=img,
    )

return np.array(c2ws)`}
  </code></pre>

  <p>Camera Frustums Visualization:</p>
  <ImageDisplay
    images={[screenshot1, screenshot2]}
    captions={["Camera Frustum View 1", "Camera Frustum View 2"]}
    layout="line"
    maxWidth={500}
  />

  <div className="discussion">
    <p>
      The visualizer allowed me to confirm that the poses were computed 
      consistently across the full set of images. With the frustums displayed 
      in world space, it was clear how the camera moved around the object while 
      maintaining appropriate coverage for accurate reconstruction.
    </p>
  </div>
</div>


        </div>

        <div className="section">
    <h2>Part 1: Fit a Neural Field to a 2D Image</h2>

    <h3>Model Architecture</h3>
    <div className="discussion">
        <p><strong>Number of Layers:</strong> 10</p>
        <p><strong>Input Dim:</strong> 42</p>
        <p><strong>Hidden Dim:</strong> 256</p>
        <p><strong>Output Dim:</strong> 3</p>
        <p>
            Note that I chose to implement positional encoding (PE) as a standalone function,
            so the model’s actual input was <code>pe(x)</code>.
        </p>
    </div>

    <h3>Code excerpt- model and pe</h3>
    <pre><code>
{`def PE(coords, L):
    pe_v = np.zeros((coords.shape[0], 4*L + 2))
    
    for idx, coord in enumerate(coords):
        x_n, y_n = coord[0], coord[1]
        entry = [x_n, y_n]
        for i in range(L):
            entry.append(math.sin((2**(i))*math.pi*x_n))
            entry.append(math.cos((2**(i))*math.pi*x_n))
        for i in range(L):
            entry.append(math.sin((2**(i))*math.pi*y_n))
            entry.append(math.cos((2**(i))*math.pi*y_n))
    
        pe_v[idx] = np.array(entry)
    
    return pe_v

class Model(nn.Module):
    def __init__(self, in_dim=42, hidden_dim=256, out_dim=3):
        super().__init__()
        self.model = nn.Sequential(
            nn.Linear(in_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, out_dim),
            nn.Sigmoid()
        )

    def forward(self, x):
        return self.model(x)`}
    </code></pre>

    <h3>Training Progression</h3>
    <p>Below are several iterations of the neural field reconstruction for both the fox and the rose (iterations 0, 200, 500, 800, and 1500):</p>

    <ImageDisplay
        images={[iter0_neural, iter200_neural, iter500_neural, iter800_neural, iter1500_neural]}
        captions={[
            "Iteration 0",
            "Iteration 200",
            "Iteration 500",
            "Iteration 800",
            "Iteration 1500"
        ]}
        layout="line"
        maxWidth={300}
    />

    <p>Same progression for the rose:</p>

    <ImageDisplay
        images={[iter0_rose, iter200_rose, iter500_rose, iter800_rose, iter1500_rose]}
        captions={[
            "Iteration 0",
            "Iteration 200",
            "Iteration 500",
            "Iteration 800",
            "Iteration 1500"
        ]}
        layout="line"
        maxWidth={300}
    />

    <h3>Comparison of Frequency (L) and Width</h3>
    <p>Below is a 2×2 grid comparing two choices of positional encoding frequency L and model width:</p>

    <ImageDisplay
        images={[l3_w32, l3_w256, l10_w32, l10_w256]}
        captions={[
            "L = 3, Width = 32",
            "L = 3, Width = 256",
            "L = 10, Width = 32",
            "L = 10, Width = 256"
        ]}
        layout="grid"
        maxWidth={300}
    />

    <h3>PSNR Curves</h3>
    <p>PSNR curves for the fox and rose reconstructions:</p>

    <ImageDisplay
        images={[psnr_fox, psnr_rose]}
        captions={["PSNR – Fox", "PSNR – Rose"]}
        layout="line"
        maxWidth={500}
    />
        <div>
        <div className="section">
            <h2>Part 2.1: Create Rays from Cameras</h2>

            <p>
            Here I implemented three utility functions:
            <strong> transform(c2w, x_c)</strong> to convert camera coordinates to
            world coordinates, <strong>pixel_to_camera(K, uv, s)</strong> to lift a
            pixel (u, v) with depth s to camera space, and
            <strong>pixel_to_ray(K, c2w, uv)</strong> to produce ray origins (r₀)
            and normalized ray directions (rᴅ).
            </p>

            <pre>
            <code>{`
    # [4, 4], [N, 3] -> [N, 3]
    def transform(c2w, x_c):
        \"\"\"Convert points x_c (camera coords) into world coords using c2w.\"\"\"
        # make homogeneous (N,4)
        x_c1 = np.concatenate([x_c, np.ones((x_c.shape[0], 1), dtype=x_c.dtype)], axis=1)
        # apply transform: (4,4) @ (4,N) -> (4,N) then transpose -> (N,4)
        x_w = (c2w @ x_c1.T).T
        return x_w[:, :3]  # drop homogeneous component

    # [3,3], [N,2], [N] -> [N, 3]
    def pixel_to_camera(K, uv, s):
        \"\"\"Map pixel coordinates uv and depths s to camera-space 3D points.\"\"\"
        # append ones -> (N,3)
        uv1 = np.concatenate([uv, np.ones((uv.shape[0], 1), dtype=uv.dtype)], axis=1)
        Kinv = np.linalg.inv(K)
        # (N,3) * (3,3).T -> (N,3)
        return (s.reshape(-1, 1) * uv1) @ Kinv.T

    # [3,3], [4,4], [N,2] -> r0: [N,3], rD: [N,3]
    def pixel_to_ray(K, c2w, uv):
        \"\"\"Return ray origins and normalized directions for a set of pixel coords.\"\"\"
        # ray origin is camera center (same for all pixels)
        r0 = np.tile(c2w[:3, 3], (uv.shape[0], 1))

        # compute camera-space 3D points at unit depth and transform to world
        s = np.ones(uv.shape[:-1], dtype=np.float32)
        xc = pixel_to_camera(K, uv, s)
        xw = transform(c2w, xc)

        # direction and normalization
        rD = xw - r0
        rD /= np.linalg.norm(rD, axis=-1, keepdims=True)

        return r0, rD`}</code>
            </pre>
        </div>

        <div className="section">
            <h2>Part 2.2: Sampling</h2>

            <p>
            This section samples rays from images and then samples points along the
            rays. The dataloader is used to sample pixels (with a small centering
            offset). To avoid repeated identical sample sets, we apply a small
            random perturbation when sampling along the ray depth bins.
            </p>

            <pre>
            <code>{`

    # imset: [num_images, H, W, 3], K: [3,3], c2ws: [num_images,4,4]
    # returns: r0 [N,3], rD [N,3], rgb [N,3]
    def sampled_rays(imset, K, c2ws, N, M=-1):
        if M == -1:
            M = imset.shape[0]

        r0, rD, rgb = [], [], []
        selected = random.sample(range(len(imset)), M)

        for idx in selected:
            im, c2w = imset[idx], c2ws[idx]

            # dataloader returns (pixel_coords [n,2], colors [n,3]) when norm=False
            sampledPts, sampledCols = dataloader(N // M, im, norm=False)
            # shift to center of pixel
            sampledPts = sampledPts.astype(np.float32) + 0.5

            r0_s, rD_s = pixel_to_ray(K, c2w, sampledPts)

            r0.append(r0_s)
            rD.append(rD_s)
            rgb.append(sampledCols)

        return (
            np.concatenate(r0, axis=0),
            np.concatenate(rD, axis=0),
            np.concatenate(rgb, axis=0),
        )

    # [N,3], [N,3] -> pts: [N, n_samples, 3], t: [N, n_samples]
    def sample_along_rays(r0, rD, n_samples=64, near=2.0, far=6.0, perturb=True):
        N = r0.shape[0]
        t = np.linspace(near, far, n_samples)
        t = np.tile(t, (N, 1))

        if perturb:
            widths = (far - near) / n_samples
            # stratified perturbation per sample bin
            t += np.random.rand(*t.shape) * widths

        pts = r0[:, None, :] + rD[:, None, :] * t[:, :, None]
        return pts, t`}</code>
            </pre>
        </div>

        <div className="section">
            <h2>Part 2.3: Putting the Dataloading All Together</h2>

            <p>
            I reused the starter Viser visualization code to render camera frustums
            and sampled rays so we can visually inspect coverage and sampling
            quality. Below are snapshots of the visualizer output.
            </p>

            <ImageDisplay
            images={[viser1, viser2]}
            captions={["Viser - view 1", "Viser - view 2"]}
            layout="line"
            maxWidth={600}
            />
        </div>

        <div className="section">
            <h2>Part 2.4: Neural Radiance Field</h2>

            <p>
            I implemented a NeRF-style model with a skip connection on the XYZ
            branch, a density head, and an RGB head which concatenates direction
            encoding. Positional encoding is applied inside <code>forward</code>.
            </p>

            <pre>
            <code>{`class NERFmodel(nn.Module):
        def __init__(self, in_dim_xyz=63, in_dim_rd=27,
                    hidden_dim=256, out_dim_dense=1, out_dim_rgb=3):
            super().__init__()


            self.l1 = nn.Linear(in_dim_xyz, hidden_dim)
            self.l2 = nn.Linear(hidden_dim, hidden_dim)
            self.l3 = nn.Linear(hidden_dim, hidden_dim)
            self.l4 = nn.Linear(hidden_dim, hidden_dim)


            self.l_concat = nn.Linear(hidden_dim + in_dim_xyz, hidden_dim)


            self.l5 = nn.Linear(hidden_dim, hidden_dim)
            self.l6 = nn.Linear(hidden_dim, hidden_dim)
            self.l7 = nn.Linear(hidden_dim, hidden_dim)


            self.dense_1 = nn.Linear(hidden_dim, out_dim_dense)


            self.rgb_1 = nn.Linear(hidden_dim, hidden_dim)
            self.rgb_2_concat = nn.Linear(hidden_dim + in_dim_rd, hidden_dim // 2)
            self.rgb_3 = nn.Linear(hidden_dim // 2, out_dim_rgb)

        def forward(self, pe_xyz, pe_dir, L_xyz=10, L_dir=4):
            # positional encode inside forward 
            pe_xyz_tensor = PositionalEncoder(pe_xyz, L=L_xyz).to(device)
            pe_dir_tensor = PositionalEncoder(pe_dir, L=L_dir).to(device)

            x = F.relu(self.l1(pe_xyz_tensor))
            x = F.relu(self.l2(x))
            x = F.relu(self.l3(x))
            x = F.relu(self.l4(x))

            x = torch.cat([x, pe_xyz_tensor], dim=-1)
            x = F.relu(self.l_concat(x))

            x = F.relu(self.l5(x))
            x = F.relu(self.l6(x))
            x = self.l7(x)

            density = F.relu(self.dense_1(x))

            x_rgb = self.rgb_1(x)
            x_rgb = torch.cat([x_rgb, pe_dir_tensor], dim=-1)
            x_rgb = F.relu(self.rgb_2_concat(x_rgb))
            rgb = torch.sigmoid(self.rgb_3(x_rgb))

            return density, rgb`}</code>
            </pre>
        </div>

        <div className="section">
            <h2>Part 2.5: Volume Rendering</h2>

            <p>
            The final main part of this project was to implement a volume rendering function. This one used torch, unlike a lot of my previous functions which used numpy instead. To do this I simply calculated the density and Ti's seperately, then combined them into the final weights output. After this, we trained the lego data on our data pipeline; below are a few images showing the progress over multiple iterations, followed by the animation that was rendered at the end.
            </p>

            <ImageDisplay
            images={[training_lego]}
            captions={["Training progress - LEGO"]}
            layout="line"
            maxWidth={600}
            />

            <img src={legoOrbit} alt="Lego Orbit Animation" />

            <p>Below are the loss  and PNSR curves:</p>
            <img src={legolass} alt="Lego Orbit Animation" width={800} />
        </div>

        <div className="section">
            <h2>Part 2.6: Training with your own data</h2>

            <p>
            This final section was to use everything together to pull together a trained set. Below are my images, losses across iterations, as well as my final visualization video. I did not get the result I expected- in this process I tweaked my high-low values a lot and down-sampled, but was unforutnately not able to do much better than this. My guess is that this happened due to the images themselves despite having a seemingly decent visualization on the Viser. 
            </p>

            <ImageDisplay
            images={[training_custom]}
            captions={["Training progress - Custom"]}
            layout="line"
            maxWidth={600}
            />

        

            <img src={custom_orbit} alt="Custom Orbit Animation" />

            <p>Below are the loss  and PNSR curves:</p>
            <img src={loss_custom} alt="Custom Orbit Animation" width={800}/>
             
        </div>


        
        </div>

        
        
        </div>

        



    </div>

        
      
    
    
    );








    }

