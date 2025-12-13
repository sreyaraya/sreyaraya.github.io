    import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import './proj4.css';
    import CodeSnippet from './CodeSnippet';
    import './CodeSnippet.css';
    import ImageDisplay from './ImageDisplay';
    // Import images from ./assets/proj2/1_1

    import out_01 from './assets/proj5/0-1.png';
    import out_11 from "./assets/proj5/out-11.png";
    import out_12 from "./assets/proj5/out-12.png";
    import out_13 from "./assets/proj5/out-13.png";

        // Section 1 images
    import out_14 from "./assets/proj5/out-14.png";
    import out_15 from "./assets/proj5/out-15.png";
    import out_16 from "./assets/proj5/out-16.png";

    // 1.7 images
    import img_171_house from "./assets/proj5/1-7-1-house.png";
    import img_171_pepper from "./assets/proj5/1-7-1-pepper.png";
    import img_171_volcano from "./assets/proj5/1-7-1-1.png";

    import img_172_mask from "./assets/proj5/1-7-2-mask.png";
    import img_172_inpaint from "./assets/proj5/1-7-2-inpaint.png";

    import img_173 from "./assets/proj5/1-7-3.png";

    // 1.8 images
    import img_18a from "./assets/proj5/1-8-a-1.png";
    import img_18b from "./assets/proj5/1-8-b-FINAL.png";

    // 1.9 images
    import img_19a from "./assets/proj5/1-9a.png";
    import img_19b from "./assets/proj5/1-9b.png";

    // Section 1.2 images
    import b12 from "./assets/proj5/B1-2.png";

    import b121a from "./assets/proj5/B-1-2-1-a.png";
    import b121b from "./assets/proj5/B-1-2-1-b.png";
    import b121c from "./assets/proj5/1-2-1-c.png";

    import img122 from "./assets/proj5/1.2.2.png";

    import b123loss from "./assets/proj5/B1-2-3loss.png";
    import b123e1 from "./assets/proj5/B-1-2-3e1.png";
    import b123e5 from "./assets/proj5/B-1-2-3e5.png";

    import b22 from "./assets/proj5/B22.png";

    import b23a from "./assets/proj5/b23a.png";
    import b23b from "./assets/proj5/b23b.png";

    import b25 from "./assets/proj5/B25.png";

    import b26a from "./assets/proj5/B26a.png";
    import b26b from "./assets/proj5/B26b.png";








    export default function Proj() {
      return (
        //header
        <div>
          <h1>Project 5 Page</h1>
          <p>This following page is for 180 Project 5.</p>

          <div className="section">
            <h2>Part 0: Setup</h2>
            <p>Images of the outside of a building.</p>

              <div className="discussion">
                <p><strong>Seed:</strong> 100</p>

                <h3>Text Prompts</h3>
                <p>a high quality photo</p>
                <p>an oil painting of a maine coon in a hat</p>
                <p>a photo of aliens making smores around a blue campfire</p>
                <p>a black and white photo of a robot doing karaoke</p>
                <p>a photo of a dog eating a croissant</p>
                <p>an oil painting of a cat in space</p>
                <p>a painting of a waterfall of diamonds</p>
                <p>an oil painting of an old man</p>
                <p>an oil painting of people around a campfire</p>
                <p>a painting of a forest</p>
                <p>a painting of a large triangular evergreen tree</p>
                <p>a painting of a pyramid</p>
            </div>

            <ImageDisplay
                images={[out_01]}
                captions={["Generated Photos"]}
                layout="line"
                maxWidth={400}
            />
        </div>

        <div className="section">
        <h2>Part 1: Sampling Loops</h2>

        <div className="section">
            <h3>1.1 The Forward Process</h3>
            <p>
            I got the following images using a basic noising process in order to get
            the Campanile at noise levels 250, 500, and 750 as shown with a basic
            <code> add_noise </code> function.
            </p>

            <ImageDisplay
            images={[out_11]}
            captions={["Forward noising at timesteps 250, 500, 750"]}
            layout="line"
            maxWidth={500}
            />
        </div>

        <div className="section">
            <h3>1.2 Classical Denoising</h3>
            <p>
            I used Gaussian blur filtering for a simplistic denoising approach; as you
            can see the resulting images don't create a clear image as expected.
            </p>

            <ImageDisplay
            images={[out_12]}
            captions={["Gaussian blur denoising results"]}
            layout="line"
            maxWidth={500}
            />
        </div>

        <div className="section">
            <h3>1.3 One-Step Denoising</h3>
            <p>
            We move onto an actual attempt at denoising via a very simple denoising
            pass through a UNet denoiser. We observe much better results.
            </p>

            <ImageDisplay
            images={[out_13]}
            captions={["One-step UNet denoising results"]}
            layout="line"
            maxWidth={500}
            />
        </div>

          <div className="section">
    <h3>1.4: Iterative Denoising</h3>
    <div className="discussion">
      <p>
        We now try using iterative denoising as an alternate. The benefit of this
        choice is that it handles the increasing noise levels much better than
        one-step denoising did. To make it work, we also use strided timesteps to
        create skip steps in the training. While the images become clearer, the
        model also takes more creative liberties, resulting in slightly
        different outputs each run.
      </p>
    </div>

    <ImageDisplay
      images={[out_14]}
      captions={["Iterative denoising results"]}
      layout="line"
      maxWidth={500}
    />
  </div>

  {/* ===================== 1.5 ===================== */}
  <div className="section">
    <h3>1.5: Diffusion Model Sampling</h3>
    <div className="discussion">
      <p>
        This step passes random noise rather than an existing image like the
        previous attempts. We also use the “High Quality Photo” prompt embedding.
        The results are actual generated images with moderate quality, though
        many lack semantic coherence.
      </p>
    </div>

    <CodeSnippet
      code={`for i in range(5):
  clean = iterative_denoise(
      torch.randn(1, 3, 64, 64).half().to(device),
      0,
      prompt_embeds,
      strided_timesteps
  )
  ims.append(img_to_numpy(torch.from_numpy(clean)))`}
    />

    <ImageDisplay
      images={[out_15]}
      captions={["Diffusion model samples"]}
      layout="line"
      maxWidth={500}
    />
  </div>

  {/* ===================== 1.6 ===================== */}
  <div className="section">
    <h3>1.6: Classifier-Free Guidance</h3>
    <div className="discussion">
      <p>
        As an upgrade to the previous step, we apply classifier-free guidance
        (CFG). This improves image quality while reducing diversity. The results
        show significantly higher-quality outputs, with most images focusing on
        human faces rather than varied scenes.
      </p>
    </div>

    <CodeSnippet
      code={`noise_est = uncond_noise_est + scale * (noise_est - uncond_noise_est)`}
    />

    <ImageDisplay
      images={[out_16]}
      captions={["CFG-guided samples"]}
      layout="line"
      maxWidth={500}
    />
  </div>

  {/* ===================== 1.7 ===================== */}
  <div className="section">
    <h3>1.7: Image-to-Image Translation</h3>
    <div className="discussion">
      <p>
        In this part, we introduced creativity by starting from a real image of
        the Campanile. We added varying amounts of noise and denoised without
        conditioning using the SDEdit procedure.
      </p>
    </div>

    {/* ---------- 1.7.1 ---------- */}
    <div className="section">
      <h4>1.7.1: Editing Hand-Drawn and Web Images</h4>
      <div className="discussion">
        <p>
          We used three images (one web image and two hand-drawn) and edited them
          with noise levels [1, 3, 5, 7, 10, 20].
        </p>
      </div>

      <ImageDisplay
        images={[img_171_house, img_171_pepper, img_171_volcano]}
        captions={["House", "Pepper", "Volcano"]}
        layout="line"
        maxWidth={300}
      />
    </div>

    {/* ---------- 1.7.2 ---------- */}
    <div className="section">
      <h4>1.7.2: Inpainting</h4>
      <div className="discussion">
        <p>
          We created a mask and used an inpainting procedure to fill in missing
          regions of the image.
        </p>
      </div>

      <ImageDisplay
        images={[img_172_mask, img_172_inpaint]}
        captions={["Mask", "Inpainted Image"]}
        layout="line"
        maxWidth={300}
      />
    </div>

    {/* ---------- 1.7.3 ---------- */}
    <div className="section">
      <h4>1.7.3: Text-Conditional Image-to-Image Translation</h4>
      <div className="discussion">
        <p>
          We conditioned the output on a new text prompt: “a photo of a dog eating
          a croissant.” The algorithm stayed the same, but the prompt embedding
          changed the final output semantics.
        </p>
      </div>

      <ImageDisplay
        images={[img_173]}
        captions={["Text-conditioned translation"]}
        layout="line"
        maxWidth={500}
      />
    </div>
  </div>

  {/* ===================== 1.8 ===================== */}
  <div className="section">
    <h3>1.8: Visual Anagrams</h3>
    <div className="discussion">
      <p>
        This section creates images that look like two different scenes depending
        on orientation. We compute noise estimates for two prompts, flip one
        image, and average the guided estimates. Two prompt pairs were used: an
        oil painting of an old man / people around a campfire, and aliens making
        s’mores / a waterfall of diamonds.
      </p>
    </div>

    <CodeSnippet
      code={`# Compute CFG estimate for image 1
noise_est1 = uncond_noise_est + scale * (noise_est - uncond_noise_est)

# Flip image and compute CFG estimate for image 2
image_flipped = torch.flip(image, dims=[2])
noise_est2 = uncond_noise_est + scale * (noise_est - uncond_noise_est)
noise_est2 = torch.flip(noise_est2, dims=[2])`}
    />

    <ImageDisplay
      images={[img_18a, img_18b]}
      captions={["old man and campers", "campfire and waterfall"]}
      layout="line"
      maxWidth={400}
    />
  </div>

  {/* ===================== 1.9 ===================== */}
  <div className="section">
    <h3>1.9: Hybrid Images</h3>
    <div className="discussion">
      <p>
        Hybrid images are created by combining low-frequency noise from one
        prompt with high-frequency noise from another. This produces an image
        that changes interpretation based on viewing distance.
      </p>
    </div>

    <CodeSnippet
      code={`low = TF.gaussian_blur(noise_est1, kernel_size=33, sigma=2)
high = noise_est2 - TF.gaussian_blur(noise_est2, kernel_size=33, sigma=2)
noise_est_final = low + high`}
    />

    <ImageDisplay
      images={[img_19a, img_19b]}
      captions={["Forest and campfire", "Pyramid and tree"]}
      layout="line"
      maxWidth={400}
    />
  </div>
        </div>

        <div className="section">
        <h2>Part 2: Flow Matching from Scratch</h2>
        <div className="section">
  <h3>1.2: Using the UNet to Train a Denoiser</h3>

  {/* ===================== 1.2 + 1.2.1 ===================== */}
  <div className="section">
    <h4>1.2.1: Training Visualization</h4>

    <div className="discussion">
      <p>
        We first visualize digits noised at levels
        [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]. We follow this with
        training visualizations at different epochs to understand
        how the UNet progressively learns to denoise the images.
      </p>
    </div>

    <ImageDisplay
      images={[b12]}
      captions={[""]}
      layout="line"
      maxWidth={400}
    />

    <ImageDisplay
      images={[b121a]}
      captions={["training visualization 1"]}
      layout="line"
      maxWidth={400}
    />

    <ImageDisplay
      images={[b121b]}
      captions={["training visualization 2"]}
      layout="line"
      maxWidth={400}
    />

    <ImageDisplay
      images={[b121c]}
      captions={[""]}
      layout="line"
      maxWidth={400}
    />
  </div>

  {/* ===================== 1.2.2 ===================== */}
  <div className="section">
    <h4>1.2.2: Out-of-Distribution Testing</h4>

    <div className="discussion">
      <p>
        We now visualize the denoiser’s results on the same noise
        levels, even though the model was only trained on a fixed
        noise value. This allows us to evaluate how well the model
        generalizes beyond its training distribution.
      </p>
    </div>

    <ImageDisplay
      images={[img122]}
      captions={[""]}
      layout="line"
      maxWidth={500}
    />
  </div>

  {/* ===================== 1.2.3 ===================== */}
  <div className="section">
    <h4>1.2.3: Quantitative and Epoch-Based Evaluation</h4>

    <div className="discussion">
      <p>
        Finally, we analyze the training loss and denoising behavior
        across epochs. These visualizations show the loss curve as
        well as qualitative denoising outputs at different training
        stages.
      </p>
    </div>

    <ImageDisplay
      images={[b123loss]}
      captions={[""]}
      layout="line"
      maxWidth={500}
    />

    <ImageDisplay
      images={[b123e1]}
      captions={[""]}
      layout="line"
      maxWidth={400}
    />

    <ImageDisplay
      images={[b123e5]}
      captions={[""]}
      layout="line"
      maxWidth={400}
    />
  </div>
</div>

        <div className="section">
  <h2>Section 2: UNet Training and Sampling</h2>

  {/* ===================== 2.2 ===================== */}
  <div className="section">
    <h3>2.2: Training the UNet</h3>

    <div className="discussion">
      <p>
        We trained the UNet and display the training loss curve below.
      </p>
    </div>

    <ImageDisplay
      images={[b22]}
      captions={[""]}
      layout="line"
      maxWidth={500}
    />
  </div>

  {/* ===================== 2.3 ===================== */}
  <div className="section">
    <h3>2.3: Sampling from the UNet</h3>

    <div className="discussion">
      <p>
        We now sample from the UNet. Notice that we can sort of tell what
        the digits are, but the quality is very poor.
      </p>
    </div>

    <ImageDisplay
      images={[b23a]}
      captions={[""]}
      layout="line"
      maxWidth={400}
    />

    <ImageDisplay
      images={[b23b]}
      captions={[""]}
      layout="line"
      maxWidth={400}
    />
  </div>

  {/* ===================== 2.5 ===================== */}
  <div className="section">
    <h3>2.5: Training the UNet</h3>

    <div className="discussion">
      <p>
        We now train the class-conditioned UNet and plot the training
        curve below.
      </p>
    </div>

    <ImageDisplay
      images={[b25]}
      captions={[""]}
      layout="line"
      maxWidth={500}
    />
  </div>

  {/* ===================== 2.6 ===================== */}
  <div className="section">
    <h3>2.6: Sampling from the UNet</h3>

    <div className="discussion">
      <p>
        We finally sample from the class-conditioned UNet, visualizing
        the results below.
      </p>
    </div>

    <ImageDisplay
      images={[b26a]}
      captions={[""]}
      layout="line"
      maxWidth={400}
    />

    <ImageDisplay
      images={[b26b]}
      captions={[""]}
      layout="line"
      maxWidth={400}
    />
  </div>
</div>


        
        </div>




    </div>

        
      
    
    
    );








    }

