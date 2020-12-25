import Link from 'next/link';
import Image from '../components/image';

const About = () => {
    return (
        <div>
            <h1 style={{fontSize: '50px', color: 'blue'}}>About</h1>
            <Image />
            <div>
                <Link href='/'>
                    <button>Back</button>
                </Link>
            </div>
            <p>Once, I was a magician. This is my hometown.</p>
        </div>
    )
};

export default About;