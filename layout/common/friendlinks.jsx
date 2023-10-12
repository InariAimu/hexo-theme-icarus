const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { config, helper } = this.props;

        return <div class="friend-links"><ul class="friend-list"> {
                    Object.keys(config.friendlinks).map(item => {

                        let f = config.friendlinks[item];
                        return  <li>
                                    <div class="link-content">
                                        <a href={f.href} title={item}>
                                            <image class="ficon" src={f.icon} />
                                        </a>
                                        <div class="link-title">
                                            <a target="_blank" href={f.href}> {item} </a>
                                            <span> {f.info} </span>
                                        </div>
                                    </div>
                                    <div class="link-cover" style={`background-image: url(${f.icon})`}>
                                    </div>
                                </li>;
                    })
        } </ul></div>
    }
}
