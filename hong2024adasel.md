---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /ada-sel.html
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Table Example</title>
    <style>
        /* 컬럼 헤딩 글씨 크기 설정 */
        th {
            font-size: 1.2em; /* 원래 크기보다 작게 설정 */
        }
    </style>
</head>

## <center>  Adaptive Selection of Sampling-Reconstruction in Fourier Compressed Sensing</center>

#### <center> <a href="">Seongmin Hong</a><sup>1</sup>, <a href="https://jaehyeokbae.me/">Jaehyeok Bae</a><sup>1</sup>, <a href="https://list.snu.ac.kr/jongho-lee">Jongho Lee</a><sup>1,2,*</sup>, <a href="https://icl.snu.ac.kr/pi">Se Young Chun</a><sup>1,2,3,*</sup></center>

<center>
<sup>1</sup>Dept. of Electrical and Computer Engineering,   
<br>
<sup>2</sup>INMC, <sup>3</sup>IPAI   
<br>
Seoul National University, Republic of Korea
</center>

### <center> <strong>Accepted to ECCV 2024</strong> </center>

#### <center> [[arXiv](https://arxiv.org/abs/2409.11738)] [<a href="https://github.com/smhongok/Non-uniform-B-spline-Flow">github</a>] [<a href="#bibtex">bibTeX</a>] </center>



<br><br><br><br><br>

## Goal

*Let’s find the best sampling mask for each input adaptive in Fourier compressed sensing!*

<br>



## Prior work vs Ours

There are two types of prior works. <br>

<p align="center">
  <img src="files/hong2024adasel/1a.png"  width="500" >
</p>

**Joint optimization of sampling-reconstruction** (H<sub>1</sub>) is non-adaptive to each input.<br>

<p align="center">
  <img src="files/hong2024adasel/1b.png"  width="500" >
</p>

**Adaptive sampling** (H<sub>2</sub>) is hard to train.<br>

<br><br><br>

But here is the thing:



 <p align="center">
  <img src="files/hong2024adasel/1c.png"  width="500" >
</p>

Our **Adaptive selection of Sampling-Reconstruction** (H<sub>1.5</sub>) is fantastic!



<br><br><br><br><br>

In detail, ours have these advantages over prior works.

<table style="width: 70%; border: 1px solid black; border-collapse: collapse;">
    <tr>
        <th style="width: 25%; font-size:0.9em;"> </th>
        <th style="width: 25%; font-size:0.9em;">Adaptive to input k</th>
        <th style="width: 25%; font-size:0.9em;">Backprop to a continuous space</th>
        <th style="width: 25%; font-size:0.9em;">Parato optimal θ</th>
    </tr>
    <tr>
        <td style="font-size:0.9em;">Joint optimization <br>(H<sub>1</sub>)</td>
        <td><span style="color:red; font-size:1.8em;">✗</span></td>
        <td><span style="color:red; font-size:1.8em;">✗</span></td>
        <td><span style="color:green; font-size:1.8em;">✔</span></td>
    </tr>
    <tr>
        <td style="font-size:0.9em;">Adaptive sampling <br>(H<sub>2</sub>)</td>
        <td><span style="color:green; font-size:1.8em;">✔</span></td>
        <td><span style="color:red; font-size:1.8em;">✗</span></td>
        <td><span style="color:red; font-size:1.8em;">✗</span></td>
    </tr>
    <tr>
        <td style="font-size:0.9em;"><strong>Adaptive Selection <br>(H<sub>1.5</sub>)</strong></td>
        <td><span style="color:green; font-size:1.8em;">✔</span></td>
        <td><span style="color:green; font-size:1.8em;">✔</span></td>
        <td><span style="color:green; font-size:1.8em;">✔</span></td>
    </tr>
</table>


<br><br><br><br><br>

## Method

 <p align="center">
  <img src="files/hong2024adasel/2.png"  width="500" >
</p>

Our method does:<br>

1. Acquire Low-frequency region first
2. Using SR space generation model, quantify the HF Bayesian uncertainty
3. Based on the HF Bayesian uncertainty, select the pair of sampling-reconstruction

<br><br><br><br><br>

## Theory

Why is our model better than prior works? We can prove it:

 <p align="center">
  <img src="files/hong2024adasel/thm1.png"  width="500" >
</p>

 <p align="center">
  <img src="files/hong2024adasel/thm2.png"  width="500" >
</p>

<br><br><br><br><br>

## Results

 <p align="center">
  <img src="files/hong2024adasel/3.png"  width="500" >
</p>

Ours showed the best SSIM and PSNR in face RGB reconstruction,

 <p align="center">
  <img src="files/hong2024adasel/5.png"  width="500" >
</p>

and in compressed sensing MRI (8x)!

<br><br><br><br><br>

## Abstract

Compressed sensing (CS) has emerged to overcome the inefficiency of Nyquist sampling. However, traditional optimization-based reconstruction is slow and can not yield an exact image in practice. Deep learning-based reconstruction has been a promising alternative to optimization-based reconstruction, outperforming it in accuracy and computation speed. Finding an efficient sampling method with deep learning-based reconstruction, especially for Fourier CS remains a challenge. Existing joint optimization of sampling-reconstruction works (H<sub>1</sub>) optimize the sampling mask but have low potential as it is not adaptive to each data point. Adaptive sampling (H<sub>2</sub>) has also disadvantages of difficult optimization and Pareto sub-optimality. Here, we propose a novel adaptive selection of sampling-reconstruction (H<sub>1.5</sub>) framework that selects the best sampling mask and reconstruction network for each input data. We provide theorems that our method has a higher potential than H<sub>1</sub> and effectively solves the Pareto sub-optimality problem in sampling-reconstruction by using separate reconstruction networks for different sampling masks. To select the best sampling mask, we propose to quantify the high-frequency Bayesian uncertainty of the input, using a super-resolution space generation model. Our method outperforms joint optimization of sampling-reconstruction (H<sub>1</sub>) and adaptive sampling (H<sub>2</sub>) by achieving significant improvements on several Fourier CS problems.



<br><br>

<a name="bibtex">

## BibTeX

<pre> 
@InProceedings{Hong_2024_ECCV,
    author    = {Hong, Seongmin and Bae, Jaehyeok and Lee, Jongho and Chun, Se Young},
    title     = {Adaptive Selection of Sampling-Reconstruction in Fourier Compressed Sensing},
    booktitle = {European Conference on Computer Vision},
    month     = {October},
    year      = {2024},
}
</pre>
