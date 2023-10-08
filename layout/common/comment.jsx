const logger = require('hexo-log')();
const { Component } = require('inferno');
const view = require('hexo-component-inferno/lib/core/view');

module.exports = class extends Component {
    render() {
        const { config, page, helper } = this.props;
        const { __ } = helper;
        const { comment } = config;
        if (!comment || typeof comment.type !== 'string') {
            return null;
        }

        return <div class="card">
            <div class="card-content">
                {/* <h3 class="title is-5">{__('article.comments')}</h3> */}
                {(() => {

                    if(comment.type == 'giscus') {
                        return <script async=''
                            src='https://giscus.app/client.js'
                            data-repo={comment.repo}
                            data-repo-id={comment.repo_id}
                            data-category={comment.category}
                            data-category-id={comment.category_id}
                            data-mapping="pathname"
                            data-reactions-enabled="1"
                            data-emit-metadata="1"
                            data-input-position="top"
                            data-theme="light"
                            data-lang="en"
                            data-loading="lazy"
                            crossorigin="anonymous">
                        </script>;
                    }

                    else {

                        try {
                            let Comment = view.require('comment/' + comment.type);
                            Comment = Comment.Cacheable ? Comment.Cacheable : Comment;
                            return <Comment config={config} page={page} helper={helper} comment={comment} />;
                        } catch (e) {
                            logger.w(`Icarus cannot load comment "${comment.type}"`);
                            console.log(e);
                            return null;
                        }
                    }

                })()}
            </div>
        </div>;
    }
};
