import React, { Component } from 'react';
import { PanelProps, ReactPanelPlugin } from '@grafana/ui';
import { ShekerEditor } from "./shekerEditor"
import {transform} from "./aggregationTransformer"

interface dProps extends PanelProps {
  data: any
}

//import Table from '@grafana/ui/components/Table/Table';
export class MyPanel extends Component<dProps> {

  constructor(props: dProps) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const {rows,fields} = transform(data[0].rows,data[0].fields)
    return (

      <div>
        <table style={{width:"100%"}}>
          <thead>
            <tr style={{fontWeight:"bold"}}>
            {fields.map(element => {
             return <th>
                {element.name}

              </th>
            })}
            </tr>
          </thead>
          <tbody>
          {rows.map(element => {
            return <tr>
              {element.map(element => {
                return <td> {element}</td>
              })}
            </tr>
          })}
          </tbody>
        </table>


      </div>

    )
  }
}

export const reactPanel = new ReactPanelPlugin(MyPanel).setEditor(ShekerEditor);
