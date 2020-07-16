import React from 'react';

function FunctionProp(props) {
   const {url, name} = props.dataProvider;
    return (
        <div>
            <h2>StateLess Component</h2>
            <div className="card text-left">
                <img className="card-img-top" style ={{width: 300, height: 300}} src={url} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>
        </div>
    )
}

export default FunctionProp;
