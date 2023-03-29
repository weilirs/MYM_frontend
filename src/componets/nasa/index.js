import React, {useState,useEffect} from "react";
import axios from 'axios';
import {connect} from "react-redux"
import {nasaUrl} from "../../api/index"
import NASAStyles from "./NASA.module.css"

function NASA (props) {
    const [imageData, setImageData] = useState(null);
    const [authenticated,
        setAuthenticated] = useState(false)

    useEffect(() => {
        if (props.auth.authData) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    }, [props.auth])

    useEffect(() => {
        const fetchNasaData = async () => {
          try {
            const response = await axios.get(nasaUrl);
            setImageData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchNasaData();
      }, []);
    return (
        <div>
            { authenticated && imageData && (
            <div className={NASAStyles.container}>
              <h2 className={NASAStyles.title}>{imageData.title}</h2>
              <img className={NASAStyles.image}src={imageData.url} alt={imageData.title} />
            </div>
          )}
        </div>   
    )
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(NASA);
