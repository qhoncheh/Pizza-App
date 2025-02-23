import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const containerVarient = {
    hidden : {
        opacity: 0,
        x: '100vw',
    },
    visible : {
        opacity: 1,
        x: 0,
        transition:{ type: 'spring' , duration: 2}
    }
}

const nextVarient = {
    hidden : {
        x:'-100vw'
    },
    visible : {
        x:'0',
        transitio:{ type: 'spring' , stiffness:110}
    }
}
export default function Base({ addBase, pizza }) {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
    // addBase([])

    return (
        <motion.div className="base container"
        variants={containerVarient}
        initial="hidden"
        animate="visible"
        
        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li key={base} onClick={() => addBase(base)}
                            whileHover={{ scale:1.3 ,  color: '#f8e112' , originX:0 }}
                            transition={{ type: 'spring' , stiffness: 300}}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    )
                })}
            </ul>

            {pizza.base && (
                <motion.div className="next"
                    variants={nextVarient}
                >
                    <Link to="/">
                        <motion.button
                            whileHover={{ 
                                scale : 1.1 ,
                                 textShadow:'0px 0px 8px rgb(255,255,255)',
                                 boxShadow:'0px 0px 8px rgb(255,255,255)',
                                 marginRight:10
                            }}
                        >Back</motion.button>
                    </Link>
                    <Link to="/toppings">
                        <motion.button
                            whileHover={{ 
                                scale : 1.1 ,
                                 textShadow:'0px 0px 8px rgb(255,255,255)',
                                 boxShadow:'0px 0px 8px rgb(255,255,255)',
                                 marginLeft:10

                            }}
                        >Next</motion.button>
                    </Link>
                </motion.div>
            )}

        </motion.div>
    );
}
