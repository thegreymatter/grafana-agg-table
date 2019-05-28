//// Libraries
import _ from 'lodash';
import React, { PureComponent } from 'react';

export interface Options {
    value: string;
    rows: string;
    columns: string;
    threshold: string;
    thresholds: any;
    showOrder: boolean;
}

export const defaults: Options = {
    value: '3',
    rows: '2',
    columns: '1',
    threshold: '',
    thresholds: '',
    showOrder: true,
}

// Types  
import {
    PanelEditorProps,
    Threshold,
    ThresholdsEditor,
    Switch,
} from '@grafana/ui';

export class ATBEditor extends PureComponent < PanelEditorProps < Options >> {
    
    onColumnsChange = ({ target }) => {
        this.props.options['columns'] = target.value;
        this.props.onOptionsChange({ ...this.props.options, columns: target.value });
    };
    
    onThresholdChange = ({ target }) => {
        this.props.options['threshold'] = target.value;
        this.props.onOptionsChange({ ...this.props.options, threshold: target.value });
    };
    onSwitchChange = () => {                
        this.props.onOptionsChange({ 
            ...this.props.options, 
            showOrder: !this.props.options.showOrder,
            columns: (this.props.options.columns=='1') ?'2' : '1',
            rows: (this.props.options.rows=='1') ?'2' : '1'
        });        
    };   

    onThresholdsChanged = (thresholds: Threshold[]) => {
        console.log(thresholds);
    };

    render() {
        const { showOrder } = this.props.options;
        return (
        <div>
            <div className="section atb-settings">
                <div className="section-heading">Heartbeat settings</div>
                <Switch
                    label="showOrder"
                    checked = {showOrder}
                    onChange={this.onSwitchChange}           
                />      
                 <ThresholdsEditor
                    thresholds={this.props.options.thresholds}
                    onChange={thresholds => this.onThresholdsChanged(thresholds)}
                />
            </div>
        </div>
        );
    }
}