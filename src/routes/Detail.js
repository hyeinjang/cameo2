import React from 'react';
import './Detail.css';


class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        console.log(this.props)
        if(location.state === undefined){
            history.push("/")
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <article className="detail-movie">
                    <img 
                        src={location.state.posterLarge} 
                        alt={location.state.title} 
                        title={location.state.title}>
                    </img>
                    <div className="detail-movie__desc">
                        <h3>{location.state.title}</h3>
                        <ul>
                            {location.state.genres.map((genre, index) => {
                                return <li key={index}>{genre}</li>
                            })}
                        </ul>
                        <p>{location.state.summary}</p>
                    </div>
                    
                </article>
            )
        } else {
            return null
        }
        
    }
}

export default Detail;