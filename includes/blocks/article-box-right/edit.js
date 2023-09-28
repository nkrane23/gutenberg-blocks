import { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, URLInput, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 * Block Edit Component
 *
 * @param {object}    props                        Block properties ( props ).
 * @param {object}    props.attributes             Block attributes as defined in block.json.
 * @param {string}    props.attributes.title       The Title attribute as defined in block.json.
 * @param {Function}  props.setAttributes          Function to set the block attributes
 *
 * @returns {*} React Element
 */
const ExampleBockEdit = (props) => {
	const { attributes, setAttributes } = props;
	const { title, content, ctaText, ctaLink, showCTALink } = attributes;
	const blockProps = useBlockProps({ className: 'custom-block' });

	return (
		<>
			<div {...blockProps}>
				<div className="flex-row">
					<div className="article-box__image">
						<img src="https://placehold.co/500x500" />
					</div>
					<div className="article-box__text">
						<div className="content-wrap">
							<RichText
								className="article-box__title"
								tagName="h2"
								placeholder={__('Title here …', 'gutenberg-lessons')}
								value={title}
								onChange={(title) => setAttributes({ title })}
							/>
							<RichText
								className="article-box-block__content"
								tagName="p"
								placeholder={__('Content here…', 'gutenberg-lessons')}
								value={content}
								onChange={(content) => setAttributes({ content })}
							/>
						</div>
					</div>
				</div>
				{showCTALink && (
					<RichText
						className="article-box-block__link"
						tagName="a"
						placeholder={__('CTA here…', 'gutenberg-lessons')}
						value={ctaText}
						onChange={(ctaText) => setAttributes({ ctaText })}
					/>
				)}
			</div>
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						label={__('Show CTA button', 'gutenberg-lessons')}
						checked={showCTALink}
						onChange={() => setAttributes({ showCTALink: !showCTALink })}
						help={__(
							'This toggle lets you conditionally output other markup and attributes in the block.',
							'gutenberg-lessons',
						)}
					/>
					{showCTALink && (
						<URLInput
							label={__('URL', 'gutenberg-lessons')}
							value={ctaLink}
							onChange={(ctaLink) => {
								setAttributes({ ctaLink });
							}}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default ExampleBockEdit;
