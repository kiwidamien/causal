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
* [Causal inference: difference in differences, causal impact, and synthetic controls](https://towardsdatascience.com/causal-inference-using-difference-in-differences-causal-impact-and-synthetic-control-f8639c408268)

### Things discussed
* Conditioning on colliders in [Berkson's paradox](https://en.wikipedia.org/wiki/Berkson%27s_paradox). The original example that spawned the "attractive/intelligent" example
>Berkson's original illustration involves a retrospective study examining a risk factor for a disease in a statistical sample from a hospital in-patient population. Because samples are taken from a hospital in-patient population, rather than from the general public, this can result in a spurious negative association between the disease and the risk factor. For example, if the risk factor is diabetes and the disease is cholecystitis, a hospital patient without diabetes is more likely to have cholecystitis than a member of the general population, since the patient must have had some non-diabetes (possibly cholecystitis-causing) reason to enter the hospital in the first place. That result will be obtained regardless of whether there is any association between diabetes and cholecystitis in the general population.

* [Here](https://cdn.journals.lww.com/epidem/Fulltext/2003/05000/Quantifying_Biases_in_Causal_Models__Classical.9.aspx) is a pretty dry post on Berkson's paradox, [this](https://academic.oup.com/ije/article/39/2/417/680407) is a toy model, and [this post](http://www.the100.ci/2017/03/14/that-one-weird-third-variable-problem-nobody-ever-mentions-conditioning-on-a-collider/) contains a bunch of references at different levels.

## Meeting 4

May 8

* A lot of the time was spent on the Pharmacy problem and the Lollipop problem. I claim the Pharmacy problem is erronously stated. See [chapter 3 of main text](http://bayes.cs.ucla.edu/PRIMER/primer-ch3.pdf)
* A lot of this discussion ended up expanding on formulas for front door criterion.
* Post-meeting: made solution set and examples of the problems in [homework 3](simpson/chapter_3_homework_problems.ipynb)

A few interesting references came up from the problem session, particularly:

* Around Lord's Paradox:
  * One [blog](https://m-clark.github.io/docs/lord/index.html) which agrees that Pearl's analysis should be that we condition on incoming weight of students, but does not provide much intuition about why this is the right thing to do.
  * A much [deeper analysis](http://www.ccsenet.org/journal/index.php/ijsp/article/view/75051) of a similar paradox in an educational setting (comparing outcomes of different educational programs). This was a toy model with fake data, but was aimed at trying to build intuition around Lord's paradox. Might be worth looking in detail next time?
* A [paper](https://www.stat.cmu.edu/~cshalizi/402/lectures/23-causal-estimation/lecture-23.pdf) on instrumental variables, starting around page 15. Pearl's description (page 85) is not really correct, he states things should be d-separated when they are not (they are connected by the very confounder you are trying to eliminate). The whole of section 3.8 I found to be pretty sloppily written. The paper linked above gave
  * a much clearer _definition_ of instrumental varaibles,
  * provided _intuition_ about them,
  * and offered useful critique and warning around their use.

## Meeting 5

May 15

* Talk over questions arising from Chapter 3 problems from last time
* Cover chapter 4 (interventions)?
* A really interesting paper that relates to inverse propensity weighting (when to stratify vs when to randomize). Link via [Twitter discussion](https://twitter.com/harshaw_tweets/status/1258088537225859074?s=19)
    * A source of DAG tweets for COVID: [thread1](https://twitter.com/EpiEllie/status/1258607363520675840) and [thread2](https://twitter.com/David_Simons_UK/status/1258543096461004801)