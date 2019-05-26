//// Libraries
import _ from 'lodash';
import React, { PureComponent } from 'react';

export interface Options {
    value: string;
    rows: string;
    columns: string;
    threshold: string;
    thresholds: any;
}

export const defaults: Options = {
    value: '',
    rows: '',
    columns: '',
    threshold: '',
    thresholds: ''
}
// Types 

import { PanelEditorProps } from '@grafana/ui';
import { FormField } from '@grafana/ui';

export class ATBEditor extends PureComponent <PanelEditorProps<Options>> {
   
    onUpdatePanel = () => {
        console.log(this.props);
        // this.props.onOptionsChange({ this.props.options, columns: this.options.columns });
    }

    onFeedUrlChange = ({ target }) => {
        console.log(target.value);
        this.props.onOptionsChange({ ...this.props.options, columns: target.value });
      //  this.props.options['columns'] =  target.value 
    };

    render() {
        const { rows, columns, value, threshold } = this.props.options;
        return (
            <div>

          <div className="section gf-form-group">
          <h5 className="section-heading">Display</h5>
       
          <FormField
            label="Columns"
            labelWidth={8}
            inputWidth={12}
            value={columns}
            onChange={this.onFeedUrlChange}
            onBlur={this.onUpdatePanel}            
          />
          <FormField
            label="Rows"
            labelWidth={8}
            inputWidth={12}
            value={rows}
          />
          <FormField
            label="Value"
            labelWidth={8}
            inputWidth={12}
            value={value}
          />
          <FormField
            label="Threshold"
            labelWidth={8}
            inputWidth={12}
            value={threshold}
          />
        </div>
      </div>
        );
    }
}