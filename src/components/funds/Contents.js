import React, { Component } from 'react';

import Fund from './Fund';
import '../../styles/funds.css';
import file from '../../funds.json';

class Contents extends Component {
    state = {
        fundsList: [],
        displayList: [],
        offset: 0,
        currentPage: 1
    }


    componentDidMount() {
        const data = JSON.parse(JSON.stringify(file.result.funds));
        var arr = data.slice(this.state.offset, this.state.offset+10)
        this.setState({
            fundsList: data,
            displayList: arr,
            offset: this.state.offset+10
        })
    }
    
    
    render() {
        const loadMore = () => {
            var arr = this.state.fundsList.slice(this.state.offset, this.state.offset+10)
            
            this.setState({
                displayList: arr,
                offset: this.state.offset+10
            })
        }
/*
    finpegCode,
    name,
    fundType,
    threeyearReturn,
    oneyearReturn
*/
        
        return(
            <div className="content">
                {
                    this.state.displayList.map( each => {
                        return(
                            <Fund 
                                key={each.finpegCode} 
                                name={each.name} 
                                type={each.FundType} 
                                three={each.threeyearReturn} 
                                one={each.oneyearReturn} 
                            />
                        )
                    })
                }
                
                <div className="load-next" onClick={()=>loadMore()}>
                    Load more {this.state.index}
                </div>
                
            </div>
        );
    }
};

export default Contents;