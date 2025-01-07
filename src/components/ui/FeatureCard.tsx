
//Node Modules 
import{ motion } from 'motion/react';

type FeatureCardProps = {

classes?:string;
children:JSX.Element;
};

const FeatureCard = ({ classes,children,  }) => {
  return (
    
<motion.div className={` ${classes}`}> <motion.div className="">
    
    
    
    {children}</motion.div>  
    
    </motion.div>



  );
};

export default FeatureCard;
