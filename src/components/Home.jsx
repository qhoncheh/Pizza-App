import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div className="home container"
            animate={{ marginTop: '300'}}
        >
            <motion.h2
                animate={{ fontSize : '55px' , color: '#ff2994'}}
            >
                Welcome to OpenCode Pizza
            </motion.h2>
            <Link to="/base">
                <motion.button
                    animate={{ rotateZ: 360 , scale: 1.5}}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
}
