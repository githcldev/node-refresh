import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import './style.css'
var shapePro = { r: 10, stroke: 'green', fill: 'green' }
var svgStyleObj = { shape: 'circle', shapeProps: shapePro }
const debugData = [{
        name: 'Top Level',
        circleRadius: 20,
        nodeSvgShape: svgStyleObj,
        children: [{
            name: '2: User', _collapsed: true,
            children: [
                {   name: '3: Stats', _collapsed: true },
                {   name: '3: Posts',
                    attributes: {
                        widget: 'User action'
                    }, _collapsed: true,
                    children: [
                        { name: '5: Reviews' },
                        { name: '5: Incomming Comments' },
                        { name: '5: Add' },
                        { name: '5: Edit' },
                        { name: '5: Delete' },
                    ]
                }, {   name: '3: Profile Settings', _collapsed: true,
                    children: [
                        { name: '4: Add Section',
                        attributes: {
                            text: 'Career / Education / or Name Yourself',
                            image: 'Banners / ur Home page slide show',
                            video: 'intro / ad video',
                            order: 'before / after',
                            inherit: 'child / parent of ( Get More from Joomla )'
                        }, _collapsed: true },
                        { name: '4: Edit' },
                        { name: '4: Delete' },
                    ]
                }, {   name: '3: Connect', _collapsed: true,
                    children: [
                        { name: '4: Google Account' },
                        { name: '4: Youtube' },
                        { name: '4: Facebook' },
                        { name: '4: Instagram' },
                        { name: '4: Send Invitation',
                        children: [
                            { name: '5: Mail' },
                            { name: '5: Mobile Message',
                                attributes: {
                                    group: 'Select Group',
                                    users: 'You should add your own userbase',
                                    defined: 'group users into self-named groups'
                                }, _collapsed: true },
                            { name: '5: Mobile Notification' }
                        ], _collapsed: true },
                    ]
                }, {   name: '3: Contact Support', _collapsed: true,
                    children: [
                        { name: '4: Contact Us Form' },
                        { name: '4: Report Misuse / Abuse' },
                        { name: '4: Support Others' }
                    ]
                }, {   name: '3: Login / Logout', _collapsed: true }
            ]
            },{
                name: '2: Index', _collapsed: true,
                children: [
                    { name: '3: All static pages', _collapsed: true },
                    { name: '3: Contact Us', _collapsed: true },
                    { name: '3: Feedback', _collapsed: true },
                    { name: '3: Donate', _collapsed: true },
                    { name: '3: Poll', _collapsed: true }
                ]
            },{
                name: '2: Admin', _collapsed: true,
                children: [
                    { name: '3: Site Tree', _collapsed: true },
                    { name: '3: Manage User', _collapsed: true },
                    { name: '3: Settings', _collapsed: true },
                    { name: '3: Site Stats', _collapsed: true },
                    { name: '3: Login / Logout', _collapsed: true }
                ]
            }]}];
const containerStyles = {
    width: '100%',
    height: 'calc(100vh - 140px)',
}
export class OrgTree extends Component {
    state = {}
    orientation = 'horizontal'
    constructor() {
        super()
        this.onTreeClick.bind(this)
        setInterval(() => { 
            debugData["0"].children["0"]._collapsed = false;
        }, 2000)
    }
    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: 15,
                y: dimensions.height / 2
            }
        });
    }
    onTreeClick(clickEvent) {
        console.log(clickEvent)
    }
    render() {
        return (
            <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
                <Tree
                    onClick={this.onTreeClick}
                    data={debugData}
                    translate={this.state.translate}
                    orientation={this.orientation}
                />
            </div>
        );
    }
}