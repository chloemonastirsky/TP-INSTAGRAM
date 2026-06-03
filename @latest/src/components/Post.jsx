import './Post.css'

const Post = ({foto, cantidadLikes, usuario, fotoPerfil}) => {
    
    return (

        <div className="post">

            <img src={foto}/>
            <h2>{Title}</h2>

        </div>
    );
};

export default MovieCard;