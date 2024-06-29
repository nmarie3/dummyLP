import styles from "../styles/SNS.module.css"
import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Posts {
    id: string;
    text: string;
}

const SNS: React.FC = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api.posts');
                setPosts(response.data);
                setLoading(false);
            } catch(error) {
                console.error("Error fetching posts", error);
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return (
        <>
            <h3 className={styles.SNSheader}>SNS</h3>
            <div className={styles.scrollBox}>
                {loading ? (
                    <p>Loading posts...</p>
                ) : (
                    <ul>
                        {posts.map((posts) => (
                            <li key={posts.id}>{posts.text}</li>
                        ))}
                    </ul>
                )}
            </div>

        </>
      );
  }
  
  export default SNS;