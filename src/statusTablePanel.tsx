 
import React, { Component } from 'react';
import { PanelProps ,ThemeContext} from '@grafana/ui';
import {transform} from "./aggregationTransformer";
import { StatusTable } from './statusTable';

 interface dProps extends PanelProps {
    data: any
  }

  
export class StatusTablePanel extends Component<dProps> {

    constructor(props: dProps) {
      super(props);
    }
  
    getTrend(element:any){
        if(!element.trend)
        return (<span>-</span>);
        else if (element.trend>0.1)
        return (<span>▲</span>);
        else if (element.trend<-0.1)
        return (<span>▼</span>);
        else
        return (<span>▶</span>);

    }
    render() {
      const { data,options } = this.props;    
      console.log(data);
      if (data['series'][0]){
     const {rows,fields} = transform(data['series'][0].rows,data['series'][0].fields, this.props.options)    
  
      return (
      <ThemeContext.Consumer>
        {theme => 
        <StatusTable {...this.props} {...options} theme={theme} data={{rows,fields}}/>
        }
      </ThemeContext.Consumer>);}
     else {
      return (
        <div className="no-data">No DATA to show 😞</div>
      )
    }
    }
  }
  