import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Card, Feed } from 'semantic-ui-react';

const OneNews = ({ urlToImage, title, description }) => {
	return (
		<>
			<Segment>
				<Card style={{width:'100%'}}>
					<Card.Content>
						<Feed >
							<Feed.Event>
								<Feed.Label image={urlToImage} style={{width:'100px'}}/>
								<Feed.Content>
									<Feed.Summary>{description}</Feed.Summary>
                                    <Feed.Date content={title} />
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Card.Content>
				</Card>
			</Segment>
		</>
	);
};

export default OneNews;

OneNews.propTypes = {
	urlToImage: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
