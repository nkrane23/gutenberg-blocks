<?php
/**
 * Example block markup
 *
 * @package GutenbergCustom\Blocks\ArticleBoxRight
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block content.
 * @var WP_Block $block      Block instance.
 * @var array    $context    Block context.
 */

?>

<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore ?>>
	<div class="flex-row">
		<div class="article-box__image">
			<img src="https://placehold.co/500x500" />
		</div>

		<div class="article-box__text">
			<div class="content-wrap">
				<div class="article-box__title">
					<h3><?php echo wp_kses_post( $attributes['title'] ); ?></h3>
				</div>

				<div class="article-box__content">
					<p><?php echo wp_kses_post( $attributes['content'] ); ?></p>
				</div>
			</div>
		</div>
	</div>
</div>
