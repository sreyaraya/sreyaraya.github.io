    import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import './proj2.css';
    import CodeSnippet from './CodeSnippet';
    import './CodeSnippet.css';
    import ImageDisplay from './ImageDisplay';
    // Import images from ./assets/proj2/1_1
    import two_loop_conv_Dx from './assets/proj2/1_1/2_loop_conv_Dx.png';
    import two_loop_conv_Dy from './assets/proj2/1_1/2_loop_conv_Dy.png';
    import two_loop_conv from './assets/proj2/1_1/2_loop_conv.png';
    import four_loop_conv_Dx from './assets/proj2/1_1/4_loop_conv_Dx.png';
    import four_loop_conv_Dy from './assets/proj2/1_1/4_loop_conv_Dy.png';
    import four_loop_conv from './assets/proj2/1_1/4_loop_conv.png';
    import main_conv_Dx from './assets/proj2/1_1/main_conv_Dx.png';
    import main_conv_Dy from './assets/proj2/1_1/main_conv_Dy.png';
    import main_conv from './assets/proj2/1_1/main_conv.png';
    import conv_Dx from './assets/proj2/1_2/conv_Dx.png';
    import conv_Dy from './assets/proj2/1_2/conv_Dy.png';
    import edge_img from './assets/proj2/1_2/edge_img.png';
    import grad_mag from './assets/proj2/1_2/grad_mag.png';
    import conv_Dx_gauss from './assets/proj2/1_3/conv_Dx_gauss.png';
    import conv_Dy_gauss from './assets/proj2/1_3/conv_Dy_gauss.png';
    import conv_Gauss_DoG from './assets/proj2/1_3/conv_Gauss_DoG.png';
    import conv_Gauss from './assets/proj2/1_3/conv_Gauss.png';
    import dxg from './assets/proj2/1_3/Dxg.png';
    import dyg from './assets/proj2/1_3/Dyg.png';
    import grad_mag_gauss from './assets/proj2/1_3/grad_mag_gauss.png';
    import blurry_cat_2 from './assets/proj2/2_1/blurry_cat_2.png';
    import gray_cat_2 from './assets/proj2/2_1/gray_cat_2.png';
    import gray_cat from './assets/proj2/2_1/gray_cat.png';
    import gray_mahal from './assets/proj2/2_1/gray_mahal.png';
    import sharpened_cat_2_1 from './assets/proj2/2_1/sharpened_cat_2_1.png';
    import sharpened_cat_2_2 from './assets/proj2/2_1/sharpened_cat_2_2.png';
    import sharpened_cat1 from './assets/proj2/2_1/sharpened_cat1.png';
    import sharpened_cat2 from './assets/proj2/2_1/sharpened_cat2.png';
    import sharpened_mahal1 from './assets/proj2/2_1/sharpened_mahal1.png';
    import sharpened_mahal2 from './assets/proj2/2_1/sharpened_mahal2.png';
    import cat_2 from './assets/proj2/2_1/cat_2.jpeg';
    import taj_mahal from './assets/proj2/2_1/taj.jpg';
    import cat_3 from './assets/proj2/2_1/cat_3.jpg';
    import basketballFilteredFft from "./assets/proj2/2_2/basketball_filtered_fft.png";
    import basketballOriginalFft from "./assets/proj2/2_2/basketball_original_fft.png";
    import basketballSoccerballFft from "./assets/proj2/2_2/basketball+soccerball_fft.png";
    import basketballSoccerball from "./assets/proj2/2_2/basketball+soccerball.png";
    import bball from "./assets/proj2/2_2/bball.webp";

    import derekFilteredFft from "./assets/proj2/2_2/derek_filtered_fft.png";
    import derekOriginalFft from "./assets/proj2/2_2/derek_original_fft.png";
    import derekNutmegFft from "./assets/proj2/2_2/derek+nutmeg_fft.png";
    import derekNutmeg from "./assets/proj2/2_2/derek+nutmeg.png";
    import derekPicture from "./assets/proj2/2_2/DerekPicture.jpg";

    import duckFilteredFft from "./assets/proj2/2_2/duck_filtered_fft.png";
    import duckOriginalFft from "./assets/proj2/2_2/duck_original_fft.png";
    import duck from "./assets/proj2/2_2/duck.jpg";

    import elmoFilteredFft from "./assets/proj2/2_2/elmo_filtered_fft.png";
    import elmoOriginalFft from "./assets/proj2/2_2/elmo_original_fft.png";
    import elmo from "./assets/proj2/2_2/elmo.png";
    import elmoSumFft from "./assets/proj2/2_2/elmo+sum_fft.png";
    import elmoSum from "./assets/proj2/2_2/elmo+sum.png";

    import horseFilteredFft from "./assets/proj2/2_2/horse_filtered_fft.png";
    import horseOriginalFft from "./assets/proj2/2_2/horse_original_fft.png";
    import horse from "./assets/proj2/2_2/horse.jpg";
    import horseDuckFft from "./assets/proj2/2_2/horse+duck_fft.png";
    import horseDuck from "./assets/proj2/2_2/horse+duck.png";

    import nutmegFilteredFft from "./assets/proj2/2_2/nutmeg_filtered_fft.png";
    import nutmegOriginalFft from "./assets/proj2/2_2/nutmeg_original_fft.png";
    import nutmeg from "./assets/proj2/2_2/nutmeg.jpg";

    import ocean from "./assets/proj2/2_4/ocean.jpg";
    import space from "./assets/proj2/2_4/nebula.jpg";

    import sumFilteredFft from "./assets/proj2/2_2/sum_filtered_fft.png";
    import sumOriginalFft from "./assets/proj2/2_2/sum_original_fft.png";

    import sum_filtered from "./assets/proj2/2_2/sumfiltered.png";
    import elmo_filtered from "./assets/proj2/2_2/elmofiltered.png";

    import sun2 from "./assets/proj2/2_2/sun2.jpg"
    import soccer from "./assets/proj2/2_2/soccer2.jpeg";

    import blended_layer_0 from "./assets/proj2/2_4/blended_layer_0.png";
    import blended_layer_1 from "./assets/proj2/2_4/blended_layer_1.png";
    import building from "./assets/proj2/2_4/building.jpg";
    import left_0 from "./assets/proj2/2_4/left_0.png";
    import left_1 from "./assets/proj2/2_4/left_1.png";
    import left_5 from "./assets/proj2/2_4/left_5.png";
    import right_0 from "./assets/proj2/2_4/right_0.png";
    import right_1 from "./assets/proj2/2_4/right_1.png";
    import right_5 from "./assets/proj2/2_4/right_5.png";
    import horizontal_transition from "./assets/proj2/2_4/horizontal_transition.png";
    import orapple from "./assets/proj2/2_4/orapple.png";

    import topSky from "./assets/proj2/2_4/sky1.jpeg";
    import bottomSky from "./assets/proj2/2_4/sky2.jpeg";
    import sky_building from "./assets/proj2/2_4/sky_building.png";
    import space_building from "./assets/proj2/2_4/space_building.png";
    import building_space from "./assets/proj2/2_4/building_space.png";

    export default function Proj() {
      return (
        //header
        <div>
          <h1>Project 2 Page</h1>
          <p>This following page is for 180 Project 2.</p>

          <div className="section">
            <h2>Part 1.1: Convolutions from Scratch</h2>
            <h3>Four-looped convolution</h3>
            <p>The following snippet implements 4-loop convolution operation.</p>
<pre className={`code-snippet language-python}`}>
  <code>
{`h, w = img.shape
kh, kw = kernel.shape
flipped_kernel = kernel[::-1, ::-1].astype(np.float64)

# pad image
padded = pad(img, kh // 2, kw // 2)
out = np.zeros((h, w))

for i in range(h):
    for j in range(w):
        conv_entry = 0

        for n in range(kh):
            for m in range(kw):
                conv_entry += flipped_kernel[n, m] * padded[i + n, j + m]

        out[i, j] = conv_entry

return out`}
  </code>
</pre>

<ImageDisplay
  images={[four_loop_conv, four_loop_conv_Dx, four_loop_conv_Dy]}
  captions={["Box Filter", "Dx", "Dy"]}
  layout= "line"
  maxWidth={200}
/>


<h3>Two-looped convolution</h3>
            <p>The following snippet implements 2-loop convolution operation.</p>
<pre className={`code-snippet language-python}`}>
  <code>
{`h, w = img.shape
kh, kw = kernel.shape
flipped_kernel = kernel[::-1, ::-1].astype(np.float64)

# pad image
padded = pad(img, kh // 2, kw // 2)
out = np.zeros((h, w))

for i in range(h):
    for j in range(w):
        slice = padded[i : i + kh, j : j + kw]
        out[i, j] = (slice * flipped_kernel).sum()

return out`}
  </code>
</pre>

<ImageDisplay
  images={[two_loop_conv, two_loop_conv_Dx, two_loop_conv_Dy]}
  captions={["Box Filter", "Dx", "Dy"]}
  layout= "line"
  maxWidth={200}
/>


<h3>Convolve2d convolution</h3>
            <p>The following snippet images are a result of using the convolve2d function.</p>
<ImageDisplay
  images={[main_conv, main_conv_Dx, main_conv_Dy]}
  captions={["Box Filter", "Dx", "Dy"]}
  layout= "line"
  maxWidth={200}
/>


<h3>Discussion</h3>
<div className='discussion'>
  <p><strong>Comparison for Box Filter:</strong> Timing for each was convolve2d (1.853s), convolve_2 (12.634s), convolve_4 (1:48).</p>
  <p><strong>Comparison for Dx:</strong> Timing for each was convolve2d (1.651s), convolve_2 (9.506s), convolve_4 (8.426s).</p>
  <p><strong>Comparison for Dy:</strong> Timing for each was convolve2d (4.662s), convolve_2 (11.777s), convolve_4 (8.426s).</p>
  <p>In each setting, the times seemed to be the smallest for the built-in function, with the two-loop typically being much bigger but surprisingly around the same as the four-loop.</p>
  <p>Whereas the entire image seemed similar to the original with the box filter, the Dx kernel highlighted vertical edges and the Dy kernel highlighted horizontal edges. In both the latter cases, the built-in function was a bit clearer, but the 2 and 4 loop versions were on a similar level.</p>
</div>


          </div>

          <div className="section">
            <h2>Part 1.2: Finite Difference Operator</h2>

<pre className={`code-snippet language-python}`}>
  <code>
{`grayscale = read_img_grayscale(CAMERAMAN)

# First, show the partial derivative in x and y of the cameraman image by convolving the image with finite difference operators D_x and D_y .
Dx = np.array([[1, 0, -1]])
Dy = np.array([[1], [0], [-1]])

print("Dx, Dy convolutions")
convolved_Dx = convolve2d(grayscale, Dx, mode="same", boundary="symm")
convolved_Dy = convolve2d(grayscale, Dy, mode="same", boundary="symm")
Image.fromarray(normalize(convolved_Dx)).save("conv_Dx.png")
Image.fromarray(normalize(convolved_Dy)).save("conv_Dy.png")

# Now compute and show the gradient magnitude image.
grad_mag = np.sqrt(convolved_Dx**2 + convolved_Dy**2)
Image.fromarray(normalize(grad_mag)).save("grad_mag.png")

# binarize the gradient magnitude image by picking the appropriate threshold (trying to suppress the noise while showing all the real edges; it will take you a few tries to find the right threshold; This threshold is meant to be assessed qualitatively). You can use scipy.signal.convolve2d.
threshold = 68
binarized = (grad_mag > threshold) * 255
Image.fromarray(normalize(binarized)).save("edge_img..png")`}
  </code>

</pre>

            <ImageDisplay
  images={[conv_Dx, conv_Dy, grad_mag, edge_img]}
  captions={["partial x", "partial y", "gradient magnitude", "edge image"]}
  layout= "line"
  maxWidth={200}
/>

    <h3>Discussion</h3>
    <div className='discussion'>
    <p>The optimal threshold was 68. Lower showed too much noise from the light reflecting on the jacket and around the borders, higher made key silhouette less defined. The quality of the image also mattered as this one has a decently high contrast; low-contrast would have had a huge issue with the entire image leaning too white or black. Very high contrast similarly would have been better for an edge image.</p>
    </div>
          </div>

          <div className="section">
            <h2>Part 1.3: Derivative of Gaussian (DoG) Filter</h2>
            <div className="subsection">
                <h3>Gaussian Smoothing</h3>
                <pre className={`code-snippet language-python}`}>
  <code>
{`gaussian = cv2.getGaussianKernel(3, 1)
kernel = np.outer(gaussian, gaussian.T)

convolved_Gaussian = convolve2d(grayscale, kernel)
Dx = np.array([[1, 0, -1]])
Dy = np.array([[1], [0], [-1]])

print("Dx, Dy convolutions")
convolved_Dx = convolve2d(convolved_Gaussian, Dx, mode="same", boundary="symm")
convolved_Dy = convolve2d(convolved_Gaussian, Dy, mode="same", boundary="symm")
Image.fromarray(normalize(convolved_Dx)).save("conv_Dx_gauss.png")
Image.fromarray(normalize(convolved_Dy)).save("conv_Dy_gauss.png")

# Now compute and show the gradient magnitude image.
grad_mag = np.sqrt(convolved_Dx**2 + convolved_Dy**2)
Image.fromarray(normalize(grad_mag)).save("grad_mag_gauss.png")

# binarize the gradient magnitude image by picking the appropriate threshold (trying to suppress the noise while showing all the real edges; it will take you a few tries to find the right threshold; This threshold is meant to be assessed qualitatively). You can use scipy.signal.convolve2d.
threshold = 45
binarized = (grad_mag > threshold) * 255
Image.fromarray(normalize(binarized)).save("conv_Gauss.png")

`}
  </code>

</pre>


                <ImageDisplay
  images={[conv_Dx_gauss, conv_Dy_gauss, grad_mag_gauss, conv_Gauss]}
  captions={["Gaussian blending with Dx", "Gaussian blending with Dy", "Gaussian blending gradient magnitude", "Gaussian blending edge image"]}
  layout= "line"
  maxWidth={200}
/>
                <h3>DoG Filters</h3>

                                <pre className={`code-snippet language-python}`}>
  <code>
{`gaussian = cv2.getGaussianKernel(5, 10)
kernel = np.outer(gaussian, gaussian.T)

gaussian_Dx = convolve2d(kernel, Dx, mode="full")
gaussian_Dy = convolve2d(kernel, Dy, mode="full")
Image.fromarray(normalize(convolved_Dx)).save("Dxg.png")
Image.fromarray(normalize(convolved_Dy)).save("Dyg.png")

conv_DxG = convolve2d(grayscale, gaussian_Dx, mode="same", boundary="symm")
conv_DyG = convolve2d(grayscale, gaussian_Dy, mode="same", boundary="symm")
grad_mag = np.sqrt(conv_DxG**2 + conv_DyG**2)

binarized = (grad_mag > threshold) * 255
Image.fromarray(normalize(binarized)).save("conv_Gauss_DoG.png")
`}
  </code>

</pre>


                <ImageDisplay
  images={[dxg, dyg, conv_Gauss_DoG]}
  captions={["DoG filter Dx", "DoG filter Dy", "DoG filter edge image"]}
  layout= "line"
  maxWidth={200}
/>

                <h3>Discussion</h3>
                <div className='discussion'>
                  <p>Threshold new: 45. Much lower threshold for a comparable amount of clarity. The gaussian blur played a noticable role here as it lowered the threshold down by over 20.</p>
                    <p>They are the same filters, as you can see. (dxg vs dx_gauss)</p>
                </div>
            </div>
          </div>

          <div className="section">
            <h2>Part 2.1: Image "Sharpening"</h2>
            <pre className={`code-snippet language-python}`}>
  <code>
{`def unsharp_mask_filter_3d(img, thresh=1.2):
gaussian = cv2.getGaussianKernel(5, 1)
kernel = np.outer(gaussian, gaussian.T)

blurry = np.zeros_like(img)

for c in range(3):
    blurry[:, :, c] = ndimage.convolve(img[:, :, c], kernel, mode="reflect")

freq = (img - blurry) * thresh
return normalize_3d(img + freq)
`}
  </code>

</pre>

        <p>Sharpening for Taj Mahal</p>
            <ImageDisplay
  images={[taj_mahal, sharpened_mahal1, sharpened_mahal2]}
  captions={["Original", "Sharpened 0.7x", "Sharpened 1.2x"]}
  layout= "line"
  maxWidth={200}
/>

<p>Sharpening for small cat</p>
            <ImageDisplay
  images={[cat_2, sharpened_cat1, sharpened_cat2]}
  captions={["Original", "Sharpened 0.7x", "Sharpened 1.2x"]}
  layout= "line"
  maxWidth={200}
/>

<p>Sharpening for long cat (blurred from original) </p>
            <ImageDisplay
  images={[cat_3, sharpened_cat_2_1, sharpened_cat_2_2]}
  captions={["Original", "Sharpened 0.7x", "Sharpened 4x"]}
  layout= "line"
  maxWidth={200}
/>


    <h3>Discussion</h3>
    <div className='discussion'>
        Here we've implemented an unsharp mask filter. It blurs the photo, then subtracts that blur from the original photo, leaving it with areas of high frequencies. We can then multiply it and add it back to the original to emphasize those strong points. This in effect sharpens the clarity of our image.
    We can see changing the sharpening amount changes the result. Though both the first ones (x0.7) and second ones (x1.2) have a sharpening effect, x1.2 is noticeably clearer.
    The final unsharpened, resharpened example clearly has a better end result thsn the blurred version, but still is not able to match the resolution of the original at 0.7 it needs a much higher sharpening value of x4 to match it.
    </div>
          </div>

          <div className="section">
            <h2>Part 2.2: Combination</h2>
            <pre className={`code-snippet language-python}`}>
  <code>
{`gaussian = cv2.getGaussianKernel(5, 3)
kernel = np.outer(gaussian, gaussian.T)

low_pass = np.zeros_like(im1)

for c in range(3):
    low_pass[:, :, c] = ndimage.convolve(im1[:, :, c], kernel, mode="reflect")

high_pass = unsharp_mask_filter_3d(im2)
added = normalize_3d(low_pass * 30 + high_pass * 0.2)
`}
  </code>

</pre>

            <p>Combining elmo and the sun</p>
            <p>Main pictures</p>
            <ImageDisplay
  images={[elmo, elmo_filtered, sun2, sum_filtered, elmoSum]}
  captions={["Elmo", "Aligned Elmo", "Sun", "Aligned Sun", "Selmo"]}
  layout= "grid"
  maxWidth={150}
/>
<p>FFTs</p>
            <ImageDisplay
  images={[elmoOriginalFft, elmoFilteredFft, sumOriginalFft, sumFilteredFft, elmoSumFft]}
  captions={["Elmo FFT", "Aligned Elmo FFT", "Sun FFT", "Aligned Sun FFT", "Selmo FFT"]}
  layout= "grid"
  maxWidth={300}
/>

 <p>Combining Derek and Nutmeg</p>
            <ImageDisplay
  images={[derekPicture, nutmeg, derekNutmeg]}
  captions={["derek", "nutmeg", "dereg"]}
  layout= "grid"
  maxWidth={150}
/>

 <p>Combining Basketball and Socerball</p>
            <ImageDisplay
  images={[bball, soccer, basketballSoccerball]}
  captions={["basketball", "soccerball", "soccerbasket"]}
  layout= "grid"
  maxWidth={150}
/>

 <p>Combining Horse and Duck</p>
            <ImageDisplay
  images={[horse, duck, horseDuck]}
  captions={["horse", "duck", "dorse"]}
  layout= "grid"
  maxWidth={150}
/>

    <h3>Discussion</h3>
    <div className='discussion'>
        <p>Slight note- types of pictures really mattered; when pictures that didn't "face" the same way (ie someone to standing straight vs someone standing sideways) or pictures without the same perspective (like the dorse example) were combined, the result was skewed and not great. Those pictures could have probably aligned more nicely with some more processing (skewing, more cropping, etc.) </p>
     </div>





        </div>

        <div className="section">
            <h2>2.4: Multiresolution Blending</h2>

            <h3>Code Snippets</h3>
            <p>Building the stacks</p>
<pre className={`code-snippet language-python}`}>
  <code>
{`def gaussStack(img, lvls=4, sigma_vals=[2, 4, 6, 8]):
    sigma = 1
    g_stack = [] 
    prev = img

    for i in range(lvls):
        print(i)

        gaussian = cv2.getGaussianKernel(min(6 * sigma + 1, 37), sigma)
        kernel = np.outer(gaussian, gaussian.T)

        blurry = np.zeros_like(img)
        for ch in range(3):
            blurry[:, :, ch] = ndimage.convolve(prev[:, :, ch], kernel, mode="reflect")
        prev = blurry

        g_stack.append(blurry) 

        sigma *= 2

    return g_stack


def lapStack(img, lvls=4, sigma_vals=[2, 4, 6, 8]):
    g_stack = gaussStack(img, lvls, sigma_vals)
    l_stack = []

    for i in range(lvls - 1):
        l_stack.append(g_stack[i] - g_stack[i + 1])

    return l_stack
`}
  </code>

</pre>

<p>Layer Blending</p>
<pre className={`code-snippet language-python}`}>
    <code>
{`l = len(stack1)
blended = []

for le in range(l):
    layer = mask[le] * stack1[le] + (1 - mask[le]) * stack2[le]
    Image.fromarray(normalize_3d(layer)).save(f"blended_layer_{le}.png")
    skio.imshow(normalize_3d(layer))
    # skio.show()
    blended.append(layer)
return blended
`}
    </code>
</pre>
            <h3>The Orapple</h3>
<div style={{ paddingBottom: "2rem" }}>
  <ImageDisplay
    images={[left_0, right_0, blended_layer_0]}
    captions={["", "", ""]}
    layout="grid"
    maxWidth={150}
  />
</div>

<div style={{ paddingBottom: "2rem" }}>
  <ImageDisplay
    images={[left_1, right_1, blended_layer_1]}
    captions={["", "", ""]}
    layout="grid"
    maxWidth={150}
  />
</div>

<div style={{ paddingBottom: "2rem" }}>
  <ImageDisplay
    images={[left_5, right_5, orapple]}
    captions={["", "", ""]}
    layout="grid"
    maxWidth={150}
  />
</div>

<div style={{ paddingBottom: "2rem" }}>
  <ImageDisplay
    images={[orapple]}
    captions={["The Orapple"]}
    layout="grid"
    maxWidth={400}
  />
</div>

    <h3>Discussion</h3>
    <div className='discussion'>
        <p>Note- the half images are slightly different in that they aren't fully blank on one side. The reason for this is that my mask wasn't a straight 1/0, but instead used a gradual change with np.linespace for better blending. The half images show the image with the mask on them, not just one half.</p>
    </div>



            <h3>Horizontal Transition</h3>
            <ImageDisplay
  images={[topSky, bottomSky, horizontal_transition]}
  captions={["Top Sky", "Bottom Sky", "Transition"]}
  layout= "line"
  maxWidth={250}
/>

    <h3>Irregular Mask 1</h3>
    <ImageDisplay
  images={[ocean, building, sky_building]}
  captions={["Ocean", "Space", "Building"]}
  layout= "line"
  maxWidth={200}
/>

    <h3>Irregular Mask 2</h3>
    <ImageDisplay
  images={[space, building, building_space, space_building]}
  captions={["Ocean", "Space", "Building in space", "Space in building"]}
  layout= "line"
  maxWidth={200}
/>

    <h3>Discussion</h3>
    <div className='discussion'>
        <p>The masks here were rectangular and were constructed by manually finding the points of the rectangle, then using polyfill to create a mask with 1's in that area and 0's everywhere else. The remainder of the process was the same as the other kind of divisions.</p>   
        </div>

        </div>
        </div>
      );








    }

