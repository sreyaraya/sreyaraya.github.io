    import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import './proj2.css';
    import CodeSnippet from './CodeSnippet';
    import './CodeSnippet.css';
    import ImageDisplay from './ImageDisplay';
    // Import images from ./assets/proj2/1_1

    import building_left from './assets/proj3/building_left.jpg';
    import building_right from './assets/proj3/building_right.jpg';
    import building_left_map from './assets/proj3/building_left_map.jpg';
    import building_right_map from './assets/proj3/building_right_map.jpg';
    import house_down from './assets/proj3/house_down.jpg';
    import house_up from './assets/proj3/house_up.jpg';
    import kitchen_left from './assets/proj3/kitchen-left.jpg';
    import kitchen_right from './assets/proj3/kitchen-right.jpg';

    import building_mosaic from './assets/proj3/buildingMosiac_mosiac.png';
    import house_mosaic from './assets/proj3/houseMosiac_mosiac.png';
    import kitchen_mosaic from './assets/proj3/kitchenMosiac_mosiac.png';

    import poster from './assets/proj3/poster.jpg';
    import rectified_poster_bilinear from './assets/proj3/rectified_pooster_bili.png';
    import rectified_poster_nearest from './assets/proj3/rectified_pooster_nn.png';

    import harrisLeft from './assets/proj3/harris_corners_kLeft.png'
    import harrisRight from './assets/proj3/harris_corners_kRight.png'
    import anmsLeft from './assets/proj3/anms_kLeft.png'
    import anmsRight from './assets/proj3/anms_kRight.png'
    import featuresKLeft from './assets/proj3/kLeft_extracted_features.png'
    import featuresKLeft2 from './assets/proj3/kLeft_extracted_features_2.png'
    import featuresKRight from './assets/proj3/kRight_extracted_features.png'
    import featuresKRight2 from './assets/proj3/kRight_extracted_features_2.png'
    import matchedKLR from './assets/proj3/kLeftkRight_matching.png'
    import kitchMoz from './assets/proj3/kLeft_kRight_mosiac.png'

    import matcheBLR from './assets/proj3/bLeftbRight_matching.png'
    import buildingMoz from './assets/proj3/bLeft_bRight_mosiac.png'

    import matchedHUD from './assets/proj3/hLefthRight_matching.png'
    import houseMoz from './assets/proj3/hLeft_hRight_mosiac.png'


    export default function Proj() {
      return (
        //header
        <div>
          <h1>Project 3 Page</h1>
          <p>This following page is for 180 Project 3.</p>

          <div className="section">
            <h2>Part A.1: Images</h2>
            <p>Images of the outside of a building.</p>

<ImageDisplay
  images={[building_left, building_right]}
  captions={["Building Left", "Building Right"]}
  layout= "line"
  maxWidth={200}
/>

<p>Images of a house interior.</p>

<ImageDisplay
  images={[house_up, house_down]}
  captions={["House up", "House down"]}
  layout= "line"
  maxWidth={200}
/>

<p>Images of a kitchen.</p>

<ImageDisplay
  images={[kitchen_left, kitchen_right]}
  captions={["Kitchen Left", "Kitchen Right"]}
  layout= "line"
  maxWidth={200}
/>

        </div>


        <div className="section">
            <h2>Part A.2: Homographies</h2>
            <p>Correspondencies</p>
            <ImageDisplay
  images={[building_left_map, building_right_map]}
  captions={["Building Left Correspondences", "Building Right Correspondences"]}
  layout= "line"
  maxWidth={400}
/>

<p>Recovered Homography:</p>
<pre><code>
[
  [1.55838507, 0.11868915, -352.979407],
  [0.17622078, 1.50439797, -324.398341],
  [0.00041253, 0.00034934, 1.0]
]
</code></pre>

<pre>
        <code>b = A * h</code>
      </pre>

      <p>
        <strong>System of Equations</strong>
      </p>
      <pre>
        <code>
{`b = [x_p, y_p]

A = [
  [x, y, 1, 0, 0, 0, -x*x_p, -x_p*y],
  [0, 0, 0, x, y, 1, -x*y_p, -y_p*y]
]

h = [
  [1.55838507, 0.118689152, -352.979407],
  [0.176220785, 1.50439797, -324.398341],
  [0.000412532621, 0.000349344051, 1.0]
]

b = A * h`}
        </code>
      </pre>


        </div>


        <div className="section">
            <h2>Part A.3: Warping</h2>
            <p>Rectification:</p>
            <ImageDisplay
  images={[poster, rectified_poster_bilinear, rectified_poster_nearest]}
  captions={["orignal poster", "rectified poster bilinear", "rectified poster nearest neighbor"]}
  layout= "line"
  maxWidth={300}
/>

<h3>Discussion</h3>
<div className='discussion'>
  <p>This section is responsible for warping one image onto another. We took two appraoches- NN and Bilinear. Each approach essentially boils down to warping one image to the size of the other by computing its homography and then mapping using the inverse.</p>
</div>

</div>

        <div className="section">
            <h2>Part A.4: Mosaics</h2>
            <p>Mosaics:</p>
            <ImageDisplay
  images={[building_mosaic, house_mosaic, kitchen_mosaic]}
  captions={["Building Mosaic", "House Mosaic", "Kitchen Mosaic"]}
  layout= "line"
  maxWidth={600}
/>

<div className='discussion'>
  <p>The final piece here creates the mosiac. We do this by placing the first picture and second (now warped to the first one) onto a canvas big enough for both. Then they'e both placed on the canvas, with laplacian blending used to smooth out the seams. Note the existence of some seams despite the blending; this was an improvement over the original appearance of each mosiac with no blending and visible edge artifacts.</p>
</div>


</div>

        <div className="section">
            <h2>Part B.1: Harris Corner Detection</h2>
            <p>Images:</p>
            <ImageDisplay
  images={[kitchen_left, kitchen_right]}
  captions={["Kitchen left", "Kitchen right"]}
  layout= "line"
  maxWidth={400}/>

            <p>Harris Corners:</p>
            <ImageDisplay
  images={[harrisLeft, harrisRight]}
  captions={["Kitchen left", "Kitchen right"]}
  layout= "line"
  maxWidth={600}
/>
  <h3>Discussion</h3>
<div className='discussion'>
  <p>Harris detection essentially grabs the strongest points it can find in a given image. The problem, as you can see, is that there are way too many points to be very useful, and they're also very clustered together.</p>
</div>

<p>ANMS</p>
            <ImageDisplay
  images={[anmsLeft, anmsRight]}
  captions={["Kitchen left", "Kitchen right"]}
  layout= "line"
  maxWidth={600}
/>
  <h3>Discussion</h3>
<div className='discussion'>
  <p>In this section we take the fed in Harris points, then take some N strongest points out of them. Here strength is actually defined by harris strength as well as distance from a stronger point, in effect prioritizing dominantly strong points. This gives us a big improvement from Harris by creating an even distribution. I set N to 500 for a reasonable number of points that could be further filtered down later on.</p>
</div>

</div>


<div className="section">
            <h2>Part B.2: Feature Descriptor Extraction</h2>
            <p>Original Pictures:</p>
            <ImageDisplay
  images={[kitchen_left, kitchen_right]}
  captions={["Kitchen Left", "Building Left"]}/>

            <p>Feature descriptors:</p>
            <ImageDisplay
  images={[featuresKLeft, featuresKLeft2, featuresKRight, featuresKRight2]}
  captions={["Kitchen Left Features", "Kitchen Left Features", "Kitchen Right Features", "Kitchen Right Features"]}
  layout= "line"
  maxWidth={600}
/>

  <h3>Discussion</h3>
<div className='discussion'>
  <p>The above shows 10 pairs of 40x40 patches and their corresponding 8x8 feature extractions. We took each point, pulled out a 40x40 patch around it (keeping only the ones with valid 40x40s), then averaged down to 8x8 patches. Each resulting smaller patch was normalized via mean and standard deviation, resulting in N final feature extractions.</p>
</div>
</div>


<div className="section">
            <h2>Part B.3: Feature Matching</h2>
            <p>Matched Photo Set:</p>
  <ImageDisplay
  images={[matchedKLR, matcheBLR, matchedHUD]}
  captions={["Kitchen matched points", "Building matched points", "House matched points"]}
  layout= "line"
  maxWidth={600}
/>

  <h3>Discussion</h3>
<div className='discussion'>
  <p>This step matches the points between the two images by looking for the best matched feature pairs between both. This is accomplished by finding the 1st and 2nd nearest neighbors in B's features for each feature in A, then accepting that pair if the ratio of the distance between 1st and 2nd matches meets a threshold, indicating that the 1st match is unique enough to be significant. To make this more robust, we apply symmetry by going back through the accepted pairs and keeping only the ones in which the pair's B point would choose the corresponding A point under the same algorithm.</p>
</div>
</div>


<div className="section">
            <h2>Part B.4: RANSAC for Robust Homography</h2>
            <h3>RAANSAC vs Manual Mosiacs</h3>
            <p>Kitchen Mosiac</p>
            <ImageDisplay
  images={[kitchen_mosaic, kitchMoz]}
  captions={["Manual Stitching", "RAANSAC Stitching"]}
  maxWidth={600}/>

              <p>Building Mosiac</p>
            <ImageDisplay
  images={[building_mosaic, buildingMoz]}
  captions={["Manual Stitching", "RAANSAC Stitching"]}
  maxWidth={600}/>

              <p>House Mosiac</p>
            <ImageDisplay
  images={[house_mosaic, houseMoz]}
  captions={["Manual Stitching", "RAANSAC Stitching"]}
  maxWidth={600}/>

  <h3>Discussion</h3>
<div className='discussion'>
  <p>The final step is to use RAANSAC to put together the mosiac. Our goal here is to find the best set of "inliers", aka the most representative set of matched points to make a Homography with while avoiding outliers. We do this by taking 4 random pairs, computing a homography, then finding the error-based inliers on the resulting predictions. After repeating multiple times, we keep the biggest set of inliers, compute a final Homography using it, and use it to repeat the warping and blending process from part A.</p>
</div>
</div>


        </div>

        
      
    
    
    );








    }

