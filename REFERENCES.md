# Refererences


## Course material

Main text: [Causal Inference in Statistics: A Primer](http://bayes.cs.ucla.edu/PRIMER/)

## Other references

1. A Survey of Learning Causality with Data: Problems and Methods
https://arxiv.org/pdf/1809.09337.pdf

Summary:
High level review 
Has key metrics
Doesn’t have (detailed) examples, but links to public datasets and references on ML Causal Algos
Discusses useful things like propensity score, which can also adjust for population differences.

2. The seven tools of Causal Inference with reflections on Machine Learning, Pearl
https://ftp.cs.ucla.edu/pub/stat_ser/r481.pdf

Very high level, less useful than the book of why

3. Daggity examples
http://dagitty.net/learn/simpson/
This isn’t a paper, but is a great tool for generating data and learning about the issues of controlling on confounders.

4. [Counterfactual Reasoning and Learning Systems: The Example of Computational Advertising](https://www.microsoft.com/en-us/research/wp-content/uploads/2013/11/bottou13a.pdf)
A really practical example about Ad layouts and A/B tests.

5. [Causal Inference Book](https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/)
A free text on the potential outcomes approach to causal inference


6. [Doubly Robust Estimation](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1541-0420.2005.00377.x)

8. Really nice [blog post](https://fabiandablander.com/r/Causal-Inference) that gives a good, high level overiew of DAGs

9. A more technical overview [Causal Inference In statistics](https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf)

10. Estimating lifetime value in [Customer-Based Corporate Valuation for Publicly Traded Non-Contractual Firms](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3040422&download=yes)

11. [Experimenting in a ride-sharing marketplace](https://eng.lyft.com/experimentation-in-a-ridesharing-marketplace-b39db027a66e); a Lyft blog post about interference in randomized experiments and effect inflation. Not directly about causal inference, except to emphasize that you have to consider how the data was generated.

12. [Better decision making with causal inference](https://multithreaded.stitchfix.com/blog/2019/12/19/good-marketing-decisions/); a Stitch Fix blog post around how to use causal inference in determining marketing spend. A big part of this question is how many people search "stitchfix" in google and click our Ad, instead of the (free to us) result listed below the ad? How does this change the way we think about our ad spend?

13. A [paper](https://academic.oup.com/aje/article/164/11/1115/61454) on the Birthweight paradox, and a [summary](https://www.cdc.gov/mmwr/preview/mmwrhtml/00001782.htm) by the CDC