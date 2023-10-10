const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class ThemeSwitcher extends Component {
    render() {
        if (this.props.head) {
            const { helper, light, dark } = this.props;
            const { cdn } = helper;
    
            const theme_url = {
                light: cdn('highlight.js', '11.7.0', 'styles/' + light + '.css'),
                dark: cdn('highlight.js', '11.7.0', 'styles/' + dark + '.css'),
            };

            return <Fragment>
              <link rel="stylesheet" id="hljs-theme" light={theme_url.light} dark={theme_url.dark} />
              <style id="theme-switcher"></style>
              <script src={this.props.jsUrl}></script>
            </Fragment>;
        }
    }
}

ThemeSwitcher.Cacheable = cacheComponent(ThemeSwitcher, 'plugin.themeswitcher', props => {
    const { helper, head, config } = props;
    return {
        head,
        helper,
        light: config.article.highlight.theme_light,
        dark: config.article.highlight.theme_dark,
        jsUrl: helper.url_for('/js/theme-switcher.js')
    };
});

module.exports = ThemeSwitcher;
