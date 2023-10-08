const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class ThemeSwitcher extends Component {
    render() {

        if (this.props.head) {
            return <Fragment>
              <style id="theme-switcher"></style>
              <script src={this.props.jsUrl}></script>
            </Fragment>;
        }
    }
}

ThemeSwitcher.Cacheable = cacheComponent(ThemeSwitcher, 'plugin.themeswitcher', props => {
    const { helper, head } = props;
    return {
        head,
        jsUrl: helper.url_for('/js/theme-switcher.js')
    };
});

module.exports = ThemeSwitcher;
