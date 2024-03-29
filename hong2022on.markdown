---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /robustness.html
---
## <center>  On the Robustness of Normalizing Flows for Inverse Problems in Imaging </center>
#### <center> <a href="">Seongmin Hong</a><sup>1</sup>, <a href="https://inbumpark.github.io/">Inbum Park</a><sup>1</sup> , <a href="https://icl.snu.ac.kr/pi">Se Young Chun</a><sup>1,2</sup></center>
<center>
<sup>1</sup>Dept. of Electrical and Computer Engineering,   
<br>
<sup>2</sup>INMC, Interdisciplinary Program in AI   
<br>
Seoul National University, Republic of Korea
</center>
### <center> <strong>ICCV 2023</strong> </center>



#### <center>[<a href="https://openaccess.thecvf.com/content/ICCV2023/papers/Hong_On_the_Robustness_of_Normalizing_Flows_for_Inverse_Problems_in_ICCV_2023_paper.pdf">Paper</a>] [<a href="https://openaccess.thecvf.com/content/ICCV2023/supplemental/Hong_On_the_Robustness_ICCV_2023_supplemental.pdf">supp</a>] [<a href="https://arxiv.org/abs/2212.04319">arXiv</a>] [<a href="https://github.com/smhongok/robustNF">github</a>] [<a href="#bibtex">bibTeX</a>]</center>



<br><br><br><br><br>

<p align="center">
  <img src="files/hong2022on/1-01.png"  width="500" >
</p>

#### <center> Unintended severe artifacts occur in conditional normalizing flows for inverse problems in imaging, which hinder their effectiveness. </center>

<br>

##### **Conditional normalizing flow**: A generative model w/ fastness, diversity.

##### **Inverse Problems in Imaging**: Super-resolution, low-light enhancement, etc.  

<br><br><br><br><br>

<p align="center">
  <img src="files/hong2022on/3-01.gif"  width="800" >
</p>

#### <center> We found that these artifacts are caused by out-of-distribution (OOD) conditional inputs inducing "exploding inverses" in the conditional affine coupling layer (Aff). </center>

<br>

##### **OOD**: Conditional input (i.e., **y**) whose embedding (i.e., <i>g</i><sub>**θ**</sub> (**y**)) has a large Mahalanobis distance [Lee et al., NeurIPS 2018]  from the training set.

##### **Exploding inverse**: Originally reported in *unconditional* normalizing flows [Behrmann et al., AISTATS 2021], but the mechanism is different from the *conditional* normalizing flow. 

<br><br><br><br><br>

<p align="center">
  <img src="files/hong2022on/explodinginverse.gif"  width="400" >
</p>

#### <center>Exploding inverse amplifies the magnitude of features, resulting in saturated colors (colorful artifacts) and NaN pixels (black region).</center>

<br><br><br><br><br>

<p align="center">
  <img src="files/hong2022on/5a.png"  width="400" >
</p>

#### <center>We revealed the origin of the errors: The slope (<i>s</i>) of the affine should have an upper bound <i>s<sub>u</sub></i> for training. <i>s</i> ≪ <i>s</i><sub><i>u</i></sub> makes the exploding inverse, and this happens when <b>y</b> is OOD.</center>

<br><br><br><br><br>

<p align="center">
  <img src="files/hong2022on/remark2_01.png"  width="800" >
</p>

#### <center> We propose a remark to avoid the exploding inverse. We then propose a remedy to avoid the exploding inverse: use another one but affine, following Remark 2.</center>

<br>

##### **Another one**: B-spline [<a href="https://smhongok.github.io/nubsf.html">Hong et al., AAAI 2023</a>], or the modified RQ-spline (the figure).

<br><br><br><br><br>





<p align="center">
  <img src="files/hong2022on/2.png"  width="500" >
</p>
#### <center> To validate our findings, we conducted experiments on a toy dataset, </center>
<br>

<p align="center">
  <img src="files/hong2022on/6.png">
</p>
#### <center> super-resolution space generation, </center>
<br>

<p align="center">
  <img src="files/hong2022on/7.png">
</p>
#### <center> and  low-light image enhancement. </center>


<br><br><br><br><br>

### Abstract
Conditional normalizing flows can generate diverse image samples for solving inverse problems. Most normalizing flows for inverse problems in imaging employ the conditional affine coupling layer that can generate diverse images quickly. However, unintended severe artifacts are occasionally observed in the output of them. In this work, we address this critical issue by investigating the origins of these artifacts and proposing the conditions to avoid them. First of all, we empirically and theoretically reveal that these problems are caused by "exploding inverse" in the conditional affine coupling layer for certain out-of-distribution (OOD) conditional inputs. Then, we further validated that the probability of causing erroneous artifacts in pixels is highly correlated with a Mahalanobis distance-based OOD score for inverse problems in imaging. Lastly, based on our investigations, we propose a remark to avoid exploding inverse and then based on it, we suggest a simple remedy that substitutes the affine coupling layers with the modified rational quadratic spline coupling layers in normalizing flows, to encourage the robustness of generated image samples. Our experimental results demonstrated that our suggested methods effectively suppressed critical artifacts occurring in normalizing flows for super-resolution space generation and low-light image enhancement. 



<br><br>

<a name="bibtex">

### BibTeX



<pre> 
@InProceedings{Hong_2023_ICCV,
    author    = {Hong, Seongmin and Park, Inbum and Chun, Se Young},
    title     = {On the Robustness of Normalizing Flows for Inverse Problems in Imaging},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
    month     = {October},
    year      = {2023},
    pages     = {10745-10755}
}
</pre>
