import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView, MotionStyle } from "framer-motion";


interface FadeAnimateProps {
    className: string,
    children: JSX.Element,
    delay?: number,
    duration?: number
}




function FadeAnimate(props: FadeAnimateProps) {

const variants = {
    visible: { opacity: 1, transition: { delay: props.delay !== undefined ? props.delay : 0, duration:  props.duration !== undefined ? props.duration : 1.0 } },
    hidden: { opacity: 0 }
    };

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else {
        controls.start('hidden');
    }
  }, [controls, inView]);


  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={props.className}
    >{props.children}</motion.div>
  );
}

export default FadeAnimate;