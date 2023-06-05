---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /nubsf.html
---
## <center>  Neural Diffeomorphic Non-uniform B-spline Flows </center>
#### <center> <a href="">Seongmin Hong</a><sup>1</sup> , <a href="https://icl.snu.ac.kr/pi">Se Young Chun</a><sup>1,2</sup></center>
<center>
<sup>1</sup>Dept. of Electrical and Computer Engineering,   
<br>
<sup>2</sup>INMC, Interdisciplinary Program in AI   
<br>
Seoul National University, Republic of Korea
</center>
<br>
### <center> <strong>AAAI 2023</strong> </center>

#### <center> [<a href="https://arxiv.org/abs/2304.04555">arXiv</a>] [<a href="https://github.com/smhongok/Non-uniform-B-spline-Flow">github</a>] [<a href="/bibtex.html#hong23neural">bibTeX</a>]</center>



<br><br><br><br><br>

<p align="center">
  <img src="files/hong2023nubsf/4.png"  width="500" >
</p>
#### <center> Normalizing flows have been successfully modeling a complex probability distribution as an invertible transformation of a simple base distribution. </center>
<br><br><br><br><br>
<p align="center">
  <img src="files/hong2023nubsf/5.png"  width="400" >
</p>
#### <center> However, there are often applications that require more than invertibility, such as Boltzmann Generator: The computation of energies and forces in physics requires the second derivatives of the transformation to be well-defined and continuous. </center>
<br><br><br><br><br>
<p align="center">
  <img src="files/hong2023nubsf/7.png"  width="600" >
</p>
#### <center>Existing normalizing flows have their own weaknesses, so here comes our motivation. Our Non-Uniform B-spline flow has sufficient expressivity, at least C2-diffeomorphic, and has an analytic inverse. </center>
<br><br><br><br><br>
<p align="center">
  <img src="files/hong2023nubsf/fig2.png"  width="500" >
</p>
#### <center>We can observe that the non-uniform B-spline we have created is diffeomorphic, invertible, and sufficiently expressive.</center>
<br><br><br><br><br>
<p align="center">
  <img src="files/hong2023nubsf/14.png"  width="600" >
</p>
#### <center> To validate our findings, we conducted experiments on a toy dataset, </center>
<br>
<p align="center">
  <img src="files/hong2023nubsf/15.jpg"  width="600" >
</p>
#### <center> molecule dynamic simulation, (As stable as smooth normalizing flows!) </center>
<br>
<p align="center">
  <img src="files/hong2023nubsf/16.png"  width="600" >
</p>
#### <center> and molecule structure generation. (Faster than smooth normalizing flows!) </center>


<br><br><br><br><br>

### Abstract
Normalizing flows have been successfully modeling a complex probability distribution as an invertible transformation of a simple base distribution. However, there are often applications that require more than invertibility. For instance, the computation of energies and forces in physics requires the second derivatives of the transformation to be well-defined and continuous. Smooth normalizing flows employ infinitely differentiable transformation, but with the price of slow non-analytic inverse transforms. In this work, we propose diffeomorphic non-uniform B-spline flows that are at least twice continuously differentiable while bi-Lipschitz continuous, enabling efficient parametrization while retaining analytic inverse transforms based on a sufficient condition for diffeomorphism. Firstly, we investigate the sufficient condition for C<sup>k-2</sup>-diffeomorphic non-uniform kth-order B-spline transformations. Then, we derive an analytic inverse transformation of the non-uniform cubic B-spline transformation for neural diffeomorphic non-uniform B-spline flows. Lastly, we performed experiments on solving the force matching problem in Boltzmann generators, demonstrating that our C<sup>2</sup>-diffeomorphic non-uniform B-spline flows yielded solutions better than previous spline flows and faster than smooth normalizing flows.