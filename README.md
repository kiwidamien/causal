# Causal

A repo on causal reasoning and statistics. If pulling, because of the evils of Jupyter notebook, just do:
```bash
git fetch origin master
git reset --hard origin/master
```


## Meeting 1

* [Chapter 1 of main text](http://bayes.cs.ucla.edu/PRIMER/primer-ch1.pdf)
* [chapter1.ipynb](simpson/chapter1.ipynb) notebook

### Things discussed

* Review of Simpson's and Lord's paradox
* Why not regress on everything?
* What are DAGs telling us
* Discussion of "direct effects", and how "intervention" differs from "counterfactual" (in the education example, this is the difference between magically getting a degree vs actually having to pay the opportunity cost of experience in order to get the degree)
* How causal inference allows us to make conclusions from correlation, _without a RCT_
* Brief discussion of interference, when even _RCTs_ can get it wrong from [this article](https://eng.lyft.com/experimentation-in-a-ridesharing-marketplace-b39db027a66e)
* Sneak peak: talked a little bit about colliders and information flow/blocking in a DAG

## Meeting 2

* [Chapter 2 of main text](http://bayes.cs.ucla.edu/PRIMER/primer-ch2.pdf) on the anatomy of DAGs (colliders, forks, d-separation). This chapter is relatively short (pg 35--51)
* [Low birthweight paradox](https://academic.oup.com/aje/article/164/11/1115/61454) paper. Additional [CDC summary](https://www.cdc.gov/mmwr/preview/mmwrhtml/00001782.htm).
* [Stitch Fix blog post about causal reasoning in marketing](https://multithreaded.stitchfix.com/blog/2019/12/19/good-marketing-decisions/) which should give a business use case example.
* If time, [the high level blog post](https://fabiandablander.com/r/Causal-Inference)

### Things discussed