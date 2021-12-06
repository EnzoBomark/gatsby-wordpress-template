# ACF guide

1. Open the qte-development theme

```sh
  cd cms
```

2. Go to the acf folder and create a new Flexible content block.

```sh
  cd acf
  touch block-name.php
  code block-name.php
```

3. Add this template to the file

```php
<?php
require_once('utils/graphql-label.php');
require_once('utils/to-snake-case.php');

$label = 'Block name';

$block_name = [
  'key' => toSnakeCase($label),
  'name' => toSnakeCase($label),
  'label' => $label,
  'sub_fields' => [
    graphql_label($label), // Creates the label for gatsby component = BlockName
    // Fields go here e.g.
    // [
    //   'key' => $label . 'header',
    //   'label' => 'Header',
    //   'name' => 'header',
    //   'type' => 'text',
    // ],
  ],
];
```

4. Add the block to blocks.php

```sh
  cd ..
  code blocks.php
```

```php
<?php

require_once('acf/block-name.php');

$blocks = [
  $block_name,
];
```

<br>

# ACF Builder Cheatsheet

## Table of Contents

| [Basic](#basic)       | [Content](#content) | [Choice](#choice)            | [Relational](#relational)     | [jQuery](#jquery)                     | [Layout](#layout)                     |
| :-------------------- | :------------------ | :--------------------------- | :---------------------------- | :------------------------------------ | :------------------------------------ |
| [Text](#text)         | [Wysiwyg](#wysiwyg) | [Select](#select)            | [Link](#link)                 | [Google Map](#google-map)             | [Message](#message)                   |
| [Textarea](#textarea) | [Oembed](#oembed)   | [Checkbox](#checkbox)        | [Post Object](#post-object)   | [Date Picker](#date-picker)           | [Accordion](#accordion)               |
| [Number](#number)     | [Image](#image)     | [Radio](#radio)              | [Page Link](#page-link)       | [Date Time Picker](#date-time-picker) | [Tab](#tab)                           |
| [Range](#range)       | [File](#file)       | [True / False](#true--false) | [Relationship](#relationship) | [Time Picker](#time-picker)           | [Group](#group)                       |
| [URL](#url)           | [Gallery](#gallery) |                              | [Taxonomy](#taxonomy)         | [Color Picker](#color-picker)         | [Repeater](#repeater)                 |
| [Password](#password) |                     |                              | [User](#user)                 |                                       | [Flexible Content](#flexible-content) |

<br>

## Field Types

### Basic

#### Text

```php
[
  'key' => $label . 'text',
  'label' => 'Text',
  'name' => 'text',
  'type' => 'text',
  'instructions' => '',
  'required' => 0,
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
  'placeholder' => '',
  'prepend' => '',
  'append' => '',
  'maxlength' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/text)

#### Textarea

```php
[
  'key' => $label . 'textarea',
  'label' => 'Textarea',
  'name' => 'textarea',
  'type' => 'textarea',
  'instructions' => '',
  'required' => 0,
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
  'placeholder' => '',
  'maxlength' => '',
  'rows' => '',
  'new_lines' => '', // Possible values are 'wpautop', 'br', or ''.
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/textarea)

#### Number

```php
[
  'key' => $label . 'number',
  'label' => 'Number',
  'name' => 'number',
  'type' => 'number',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
  'placeholder' => '',
  'prepend' => '',
  'append' => '',
  'min' => '',
  'max' => '',
  'step' => '',
]
```

#### Range

```php
[
  'key' => $label . 'range',
  'label' => 'Range',
  'name' => 'range',
  'type' => 'range',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
  'min' => '',
  'max' => '',
  'step' => '',
  'prepend' => '',
  'append' => '',
]
```

#### Email

```php
[
  'key' => $label . 'email',
  'label' => 'Email',
  'name' => 'email',
  'type' => 'email',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
  'placeholder' => '',
  'prepend' => '',
  'append' => '',
]
```

#### URL

```php
[
  'key' => $label . 'url',
  'label' => 'Url',
  'name' => 'url',
  'type' => 'url',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
  'placeholder' => '',
]
```

#### Password

```php
[
  'key' => $label . 'password',
  'label' => 'Password',
  'name' => 'password',
  'type' => 'password',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'placeholder' => '',
  'prepend' => '',
  'append' => '',
]
```

### Content

#### Wysiwyg

```php
[
  'key' => $label . 'wysiwyg',
  'label' => 'Wysiwyg',
  'name' => 'wysiwyg',
  'type' => 'wysiwyg',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
  'tabs' => 'all',
  'toolbar' => 'full',
  'media_upload' => 1,
  'delay' => 0,
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/wysiwyg)

#### Oembed

```php
[
  'key' => $label . 'oembed',
  'label' => 'Oembed',
  'name' => 'oembed',
  'type' => 'oembed',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'width' => '',
  'height' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/oembed)

#### Image

```php
[
  'key' => $label . 'image',
  'label' => 'Image',
  'name' => 'image',
  'type' => 'image',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'return_format' => 'array',
  'preview_size' => 'thumbnail',
  'library' => 'all',
  'min_width' => '',
  'min_height' => '',
  'min_size' => '',
  'max_width' => '',
  'max_height' => '',
  'max_size' => '',
  'mime_types' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/image)

#### File

```php
[
  'key' => $label . 'file',
  'label' => 'File',
  'name' => 'file',
  'type' => 'file',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'return_format' => 'array',
  'library' => 'all',
  'min_size' => '',
  'max_size' => '',
  'mime_types' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/file)

#### Gallery

```php
[
  'key' => $label . 'gallery',
  'label' => 'Gallery',
  'name' => 'gallery',
  'type' => 'gallery',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'return_format' => 'array',
  'min' => '',
  'max' => '',
  'insert' => 'append',
  'library' => 'all',
  'min_width' => '',
  'min_height' => '',
  'min_size' => '',
  'max_width' => '',
  'max_height' => '',
  'max_size' => '',
  'mime_types' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/gallery)

### Choice

#### Select

```php
[
  'key' => $label . 'select',
  'label' => 'Select',
  'name' => 'select',
  'type' => 'select',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'choices' => [],
  'default_value' => [],
  'allow_null' => 0,
  'multiple' => 0,
  'ui' => 0,
  'ajax' => 0,
  'return_format' => 'value',
  'placeholder' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/select)

#### Checkbox

```php
[
  'key' => $label . 'checkbox',
  'label' => 'Checkbox',
  'name' => 'checkbox',
  'type' => 'checkbox',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'choices' => [],
  'allow_custom' => 0,
  'save_custom' => 0,
  'default_value' => [],
  'layout' => 'vertical',
  'toggle' => 0,
  'return_format' => 'value',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/checkbox)

#### Radio

```php
[
  'key' => $label . 'radio',
  'label' => 'Radio',
  'name' => 'radio',
  'type' => 'radio',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'choices' => [],
  'allow_null' => 0,
  'other_choice' => 0,
  'save_other_choice' => 0,
  'default_value' => '',
  'layout' => 'vertical',
  'return_format' => 'value',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/radio-button)

#### Button Group

```php
[
  'key' => $label . 'buttongroup',
  'label' => 'Button group',
  'name' => 'button_group',
  'type' => 'button_group',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'choices' => [],
  'allow_null' => 0,
  'default_value' => '',
  'layout' => 'horizontal',
  'return_format' => 'value',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/button-group/)

#### True / False

```php
[
  'key' => $label . 'truefalse',
  'label' => 'True / false',
  'name' => 'truefalse',
  'type' => 'truefalse',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'message' => '',
  'default_value' => 0,
  'ui' => 0,
  'ui_on_text' => '',
  'ui_off_text' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/true-false)

### Relational

#### Link

```php
[
  'key' => $label . 'link',
  'label' => 'Link',
  'name' => 'link',
  'type' => 'link',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'return_format' => 'array',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/link)

#### Post Object

```php
[
  'key' => $label . 'postobject',
  'label' => 'Post object',
  'name' => 'post_object',
  'type' => 'post_object',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'post_type' => [],
  'taxonomy' => [],
  'allow_null' => 0,
  'multiple' => 0,
  'return_format' => 'object',
  'ui' => 1,
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/post-object/)

#### Page Link

```php
[
  'key' => $label . 'pagelink',
  'label' => 'Page link',
  'name' => 'page_link',
  'type' => 'page_link',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'post_type' => [],
  'taxonomy' => [],
  'allow_null' => 0,
  'allow_archives' => 1,
  'multiple' => 0,
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/page-link)

#### Relationship

```php
[
  'key' => $label . 'relationship',
  'label' => 'Relationship',
  'name' => 'relationship',
  'type' => 'relationship',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'post_type' => [],
  'taxonomy' => [],
  'filters' => [
    0 => 'search',
    1 => 'post_type',
    2 => 'taxonomy',
  ],
  'elements' => '',
  'min' => '',
  'max' => '',
  'return_format' => 'object',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/relationship)

#### Taxonomy

```php
[
  'key' => $label . 'taxonomy',
  'label' => 'Taxonomy',
  'name' => 'taxonomy',
  'type' => 'taxonomy',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'taxonomy' => 'category',
  'field_type' => 'checkbox',
  'allow_null' => 0,
  'add_term' => 1,
  'save_terms' => 0,
  'load_terms' => 0,
  'return_format' => 'id',
  'multiple' => 0,
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/taxonomy)

#### User

```php
[
  'key' => $label . 'user',
  'label' => 'User',
  'name' => 'user',
  'type' => 'user',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'role' => '',
  'allow_null' => 0,
  'multiple' => 0,
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/user/)

### jQuery

#### Google Map

```php
[
  'key' => $label . 'googlemaps',
  'label' => 'Google maps',
  'name' => 'google_maps',
  'type' => 'google_maps',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'center_lat' => '',
  'center_lng' => '',
  'zoom' => '',
  'height' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/google-map)

#### Date Picker

```php
[
  'key' => $label . 'datepicker',
  'label' => 'Date picker',
  'name' => 'date_picker',
  'type' => 'date_picker',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'display_format' => 'd/m/Y',
  'return_format' => 'd/m/Y',
  'first_day' => 1,
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/date-picker)

#### Date Time Picker

```php
[
  'key' => $label . 'datetimepicker',
  'label' => 'Date time picker',
  'name' => 'date_time_picker',
  'type' => 'date_time_picker',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/date-time-picker)

#### Time Picker

```php
[
  'key' => $label . 'timepicker',
  'label' => 'Time picker',
  'name' => 'time_picker',
  'type' => 'time_picker',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'display_format' => 'g:i a',
  'return_format' => 'g:i a',
  'default_value' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/time-picker)

#### Color Picker

```php
[
  'key' => $label . 'colorpicker',
  'label' => 'Color picker',
  'name' => 'color_picker',
  'type' => 'color_picker',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/color-picker/)

### Layout

#### Message

```php
[
  'key' => $label . 'message',
  'label' => 'Message',
  'name' => 'message',
  'type' => 'message',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'message' => '',
  'new_lines' => 'wpautop', // 'wpautop', 'br', '' no formatting
  'esc_html' => 0,
]
```

#### Accordion

```php
[
  'key' => $label . 'accordion',
  'label' => 'Accordion',
  'name' => 'accordion',
  'type' => 'accordion',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'open' => 0,
  'multi_expand' => 0,
  'endpoint' => 0,
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/accordion/)

#### Tab

```php
[
  'key' => $label . 'tab',
  'label' => 'Tab',
  'name' => 'tab',
  'type' => 'tab',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'default_value' => '',
  'placeholder' => '',
  'prepend' => '',
  'append' => '',
  'maxlength' => '',
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/tab/)

#### Group

```php
[
  'key' => $label . 'group',
  'label' => 'Group',
  'name' => 'group',
  'type' => 'group',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'layout' => 'block',
  'sub_fields' => [],
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/group/)

#### Repeater

```php
[
  'key' => $label . 'repeater',
  'label' => 'Repeater',
  'name' => 'repeater',
  'type' => 'repeater',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'collapsed' => '',
  'min' => 0,
  'max' => 0,
  'layout' => 'table',
  'button_label' => '',
  'sub_fields' => [],
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/repeater/)

#### Flexible Content

```php
[
  'key' => $label . 'flexiblecontent',
  'label' => 'Flexible content',
  'name' => 'flexible_content',
  'type' => 'flexible_content',
  'instructions' => '',
  'required' => 0,
  'conditional_logic' => [],
  'wrapper' => [
    'width' => '',
    'class' => '',
    'id' => '',
  ],
  'button_label' => 'Add Row',
  'min' => '',
  'max' => '',
  'layouts' => [],
]
```

[Official Documentation](https://www.advancedcustomfields.com/resources/flexible-content/)
