import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
// import Dialog from '@material-ui/core/Dialog';
// import FlatButton from '@material-ui/core/FlatButton'

 class ImageResults extends Component {
    render() {
let imageListContent;
const {images} = this.props
if(images){
 imageListContent=(
     <GridList cols={3}>
         {images.map(img=>(
             <GridListTile  
             title={img.tags}
             key={img.id}
             subtitle={
                 <span>
                     by <strong>
                         {img.user}
                     </strong>
                 </span>
             }
             actionicon={
                <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
             }
             >
                   <img src={img.largeImageURL} alt=""/>
             </GridListTile>
         ))}

         
     </GridList>
 )
}else{
    imageListContent=<h1>Loading....</h1>
    
}

        return (
            <div>
                {imageListContent}
            </div>
        )
    }
}
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults;