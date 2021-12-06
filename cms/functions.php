<?php

require_once('blocks.php');

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group([
	'key' => 'page_builder',
	'title' => 'Page Builder',
	'fields' => [[
  'key' => 'components',
  'label' => 'Components',
  'name' => 'components',
  'type' => 'flexible_content',
  'layouts' => $blocks,
  'button_label' => 'Add a block'
  ]],
	'location' => [[[
  'param' => 'post_type',
  'operator' => '==',
  'value' => 'page'
  ]]],
	'hide_on_screen' => ['the_content'],
	'show_in_graphql' => 1,
	'graphql_field_name' => 'page',
]);

endif;



