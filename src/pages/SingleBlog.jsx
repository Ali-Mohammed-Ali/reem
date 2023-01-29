import React from "react";
import { Link } from "react-router-dom";
import "./scss/singleBlog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Blog from "../assets/sad.jpg"

function SingleBlog() {
  return (
    <div className="single-blog-container">

      {/* start path  */}
          <div className="path">
            <div className="home">
              <Link to="/" title="Home">
                <FontAwesomeIcon icon="fa-house-chimney" />
                </Link>
              </div>
              <div className="arrow">
                <FontAwesomeIcon icon="fa-circle-right" />
              </div>
              <div className="blogs-page">
              <Link to="/Blog" title="Blog Page">
                <p>blogs</p> 
                </Link>
              </div>
              <div className="arrow">
                <FontAwesomeIcon icon="fa-circle-right" />
              </div>
              <div className="blog-single-page">
              <Link to="/SingleBlog">
                <p>how to be sad</p> 
                </Link>
              </div>
          </div>
      {/* end path  */}

      {/* start header  */}

      <div className="head">
        <div className="img">
          <img src={Blog} alt="" />
        </div>
        <div className="info">
          <h4>how to be sad</h4>
          <p><span>author :</span> Reem Dissoky</p>
          <p><span>published :</span> 2-2-2023</p>
        </div>
      </div>

      {/* end header  */}

      {/* start  content  */}

      <div className="content">
        <p>The term depression is being used quite commonly these days. While I would like to believe this to be a mark of growing awareness regarding mental health, that is not exactly true! Often, ‘depression’ or ‘depressed’ are used loosely as synonyms for sadness. This leads not only to misunderstanding, but even trivialisation of a debilitating health condition, preventing people from reaching out for timely treatment. To avoid labeling all sadness as depression, and more importantly, to know the warning signs – it is important to understand what depression is.

WHAT IS DEPRESSION?
Depression is a recognised medical condition that causes persistent feelings of sadness, loss of interest and severely impacts a person’s ability to carry out daily tasks and roles. In the context of mental health, depression refers to a category of disorders called ‘Depressive Disorders’ (The Diagnostic and Statistical Manual of Mental Disorders [5th ed.; DSM–5; American Psychiatric Association, 2013]). According to the DSM-5, “The common feature of all of these disorders is the presence of sad, empty, or irritable mood, accompanied by somatic and cognitive changes that significantly affect the individual's capacity to function. What differs among them are issues of duration, timing, or presumed etiology.” (American Psychiatric Association, 2013 p.155)

This means that depression is much more than occasional mood change in response to external situations or everyday life challenges. The World Health Organization (WHO) estimates that globally over 300 million people suffer from depression. 

SYMPTOMS

The most commonly recognised symptom of depression is low mood on a daily basis for most of the day – lasting for a period of at least two weeks. This may include feeling sad, empty, and hopeless and having frequent bouts of crying. In addition to depressed mood, some of the most common signs or symptoms of depression are:

Noticeable loss of interest in activities that were previously enjoyable

Significant change in body weight and appetite even when not consciously making an effort to loose or gain weight

Sleep disruption (insomnia), sleeping too much or being unable to get out of bed

Fatigue or feeling out of energy most of the day

Feelings of worthlessness or excessive guilt and constant pessimism

Feeling distracted, being unable to concentrate

Increased indecisiveness, irritability or restlessness

Recurrent thoughts of death and dying

Thoughts about ending life with or without a specific plan for suicide

If you notice more than four of these symptoms in yourself, it is a sure sign for getting help. However, keep in mind that these symptoms could also be an effect of certain medications and physical conditions. So, instead of relying on self-medication, it is all the more important to access professional help at the earliest to get appropriate treatment.</p>
      </div>

      {/* end  content  */}
    </div>
  );
}

export default SingleBlog;
