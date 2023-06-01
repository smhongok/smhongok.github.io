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

#### <center> [<a href="https://arxiv.org/abs/2212.04319">arXiv</a>] [<a href="https://arxiv.org/abs/2212.04319">github</a>] [<a href="/bibtex.html#hong23robustness">bibTeX</a>]</center>



<br><br><br><br><br>

<p align="center">
  <img src="files/hong2022on/1.png"  width="500" >
</p>
#### <center> Unintended severe artifacts occur in conditional normalizing flows for inverse problems in imaging, which hinder their effectiveness. </center>
<br><br><br><br><br>
<p align="center">
  <img src="files/hong2022on/3.png"  width="400" >
</p>
#### <center> We found that these artifacts are caused by out-of-distribution (OOD) conditional inputs inducing "exploding inverses" in the conditional affine coupling layer. </center>
<br><br><br><br><br>
<p align="center">
  <img src="files/hong2022on/5.png"  width="400" >
</p>
#### <center>With our proposed remedy, we address this critical issue by substituting the affine coupling layers with modified rational quadratic spline coupling layers in normalizing flows, ensuring robustness in generated image samples. </center>
<br><br><br><br><br>
<p align="center">
  <img src="files/hong2022on/remark2.png"  width="500" >
</p>
#### <center> Through a comprehensive investigation, we empirically and theoretically reveal the origins of these artifacts and propose conditions to avoid them. </center>
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

