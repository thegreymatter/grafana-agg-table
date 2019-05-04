import React, { Component } from 'react';
import { PanelProps, ReactPanelPlugin } from '@grafana/ui';
import { ShekerEditor } from "./shekerEditor"


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
    return (

      <div>

        <table >
          <thead>
            <tr>
            {data[0].fields.map(element => {
             return <th>
                {element.name}

              </th>
            })}
            </tr>
          </thead>
          <tbody>
          {data[0].rows.map(element => {
            return <tr>
              {element.map(element => {
                return <td> {JSON.stringify(element)}</td>
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
