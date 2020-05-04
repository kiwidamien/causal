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

## Meeting 3
May 1st

* Discussed problem of recitivism, and program treatment. Sketched DAG to identify effects. This is a project Joyce had been working on.
* Discussed synthetic controls. Specifically looked at how the S&P 500 could be used as a synthetic control for Tesla's stock price [following Elon's tweet](https://www.alexpghayes.com/blog/elon-musk-send-tweet/)
* There was some confusion about what makes a synthetic control vs diff in diff. Found an [article](https://towardsdatascience.com/causal-inference-using-difference-in-differences-causal-impact-and-synthetic-control-f8639c408268) that gives the differences.
* Talked about using lifelines for survival analysis/regression
* Talked about how "a non-zero feature importance / coefficient" for observable correlations did not imply a causal effect (see ice-cream sales and violent crime correlation)


References from this meeting:
* [Synthetic control: Elon's tweet tanked Tesla's stock](https://www.alexpghayes.com/blog/elon-musk-send-tweet/)
* [Boosting A/B Test Power with Panel Data models](https://kyleco.github.io/experiment-panel-data/) discusses different techniques to increase power by reducing variance by including within sample regressors. Did not cover in the meeting, but has a similar flavor to IPW. Might cover in meeting 4?
* [Causal ingerence: difference in differences, causal impact, and synthetic controls](https://towardsdatascience.com/causal-inference-using-difference-in-differences-causal-impact-and-synthetic-control-f8639c408268)


## Meeting 4
May 8

* Tentative: back to chapter 3, specifically the backdoor path and front door path adjustment formulas, conditional intervention, probably skip inverse propensity (talked about in meeting 3), look into causal mediation. Maybe bring back the causal regressors from the Stitch Fix blog post (TMLE).
### Things discussed
* Conditioning on colliders in [Berkson's paradox](https://en.wikipedia.org/wiki/Berkson%27s_paradox). The original example that spawned the "attractive/intelligent" example
>Berkson's original illustration involves a retrospective study examining a risk factor for a disease in a statistical sample from a hospital in-patient population. Because samples are taken from a hospital in-patient population, rather than from the general public, this can result in a spurious negative association between the disease and the risk factor. For example, if the risk factor is diabetes and the disease is cholecystitis, a hospital patient without diabetes is more likely to have cholecystitis than a member of the general population, since the patient must have had some non-diabetes (possibly cholecystitis-causing) reason to enter the hospital in the first place. That result will be obtained regardless of whether there is any association between diabetes and cholecystitis in the general population.
* [Here](https://cdn.journals.lww.com/epidem/Fulltext/2003/05000/Quantifying_Biases_in_Causal_Models__Classical.9.aspx) is a pretty dry post on Berkson's paradox, [this](https://academic.oup.com/ije/article/39/2/417/680407) is a toy model, and [this post](http://www.the100.ci/2017/03/14/that-one-weird-third-variable-problem-nobody-ever-mentions-conditioning-on-a-collider/) contains a bunch of erefences at different levels.
