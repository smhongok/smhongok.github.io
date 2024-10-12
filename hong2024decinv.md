---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /dec-inv.html

---

## <center>  **Gradient-free Decoder Inversion in Latent Diffusion Models**</center>

#### <center> <a href="">Seongmin Hong</a><sup>1</sup>, <a href="https://www.linkedin.com/in/suhyoonjeon">Suh Yoon Jeon</a><sup>1</sup>, <a href="https://www.linkedin.com/in/khlee0192">Kyeonghyun Lee</a><sup>1</sup>, <a href="https://ernestryu.com/">Ernest K. Ryu</a><sup>2</sup>, <a href="https://icl.snu.ac.kr/pi">Se Young Chun</a><sup>1,3</sup></center>

<center>
<sup>1</sup>Dept. of Electrical and Computer Engineering, <sup>3</sup>INMC \& IPAI, Seoul National University     
<br>
<sup>2</sup>Dept. of Mathematics, University of California, Los Angeles   
<br>
</center>

### <center>Accepted to <strong>NeurIPS 2024</strong> </center>




#### <center>[<a href="http://arxiv.org/abs/2409.18442">arXiv</a>] [<a href="https://github.com/smhongok/dec-inv">github</a>] [<a href="#bibtex">bibTeX</a>]</center>



The project page will be updated soon.

<br><br><br><br><br>

### Abstract

In latent diffusion models (LDMs), denoising diffusion process efficiently takes place on latent space whose dimension is lower than that of pixel space. Decoder is typically used to transform the representation in latent space to that in pixel space. While a decoder is assumed to have an encoder as an accurate inverse, exact encoder-decoder pair rarely exists in practice even though applications often require precise inversion of decoder. Prior works for decoder inversion in LDMs employed gradient descent inspired by inversions of generative adversarial networks. However, gradient-based methods require larger GPU memory and longer computation time for larger latent space. For example, recent video LDMs can generate more than 16 frames, but GPUs with 24 GB memory can only perform gradient-based decoder inversion for 4 frames. Here, we propose an efficient gradient-free decoder inversion for LDMs, which can be applied to diverse latent models. Theoretical convergence property of our proposed inversion has been investigated not only for the forward step method, but also for the inertial Krasnoselskii-Mann (KM) iterations under mild assumption on cocoercivity that is satisfied by recent LDMs. Our proposed gradient-free method with Adam optimizer and learning rate scheduling significantly reduced computation time and memory usage over prior gradient-based methods and enabled efficient computation in applications such as noise-space watermarking while achieving comparable error levels.



<br><br>

<a name="bibtex">

### BibTeX

<pre> 
@misc{hong2024gradient,
      title={Gradient-free Decoder Inversion in Latent Diffusion Models}, 
      author={Seongmin Hong and Suh Yoon Jeon and Kyeonghyun Lee and Ernest K. Ryu and Se Young Chun},
      year={2024},
      eprint={2409.18442},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2409.18442}, 
}
</pre>

