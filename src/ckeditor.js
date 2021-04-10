import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import autoformatExtra from './autoformat-extra';
import colorPalette from './color-palette';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Autolink from '@ckeditor/ckeditor5-link/src/autolink.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';

import Emoji from '@phudak/ckeditor5-emoji/src/emoji';
import EmojiPeople from "@phudak/ckeditor5-emoji/src/emoji-people";
import EmojiNature from "@phudak/ckeditor5-emoji/src/emoji-nature";
import EmojiFood from "@phudak/ckeditor5-emoji/src/emoji-food";
import EmojiActivity from "@phudak/ckeditor5-emoji/src/emoji-activity";
import EmojiObjects from "@phudak/ckeditor5-emoji/src/emoji-objects";
import EmojiPlaces from "@phudak/ckeditor5-emoji/src/emoji-places";
import EmojiSymbols from "@phudak/ckeditor5-emoji/src/emoji-symbols";
import EmojiFlags from "@phudak/ckeditor5-emoji/src/emoji-flags";

import DOMPurify from 'dompurify';

import "../theme/style.css";

class FullInlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
FullInlineEditor.builtinPlugins = [
	Alignment,
    Autoformat,
    Autolink,
    AutoImage,
    BlockQuote,
    Bold,
    Essentials,
    FontColor,
	FontBackgroundColor,
	FontSize,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
	ImageResize,
	ImageInsert,
    ImageToolbar,
    ImageUpload,
    Indent,
    Italic,
    Link,
    LinkImage,
    List,
	ListStyle,
    MediaEmbed,
    MediaEmbedToolbar,
	Mention,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SimpleUploadAdapter,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableToolbar,
	TableProperties,
	TableCellProperties,
    TextTransformation,
    Underline,
    WordCount,
    HtmlEmbed,
    HorizontalLine,
    Emoji,
    EmojiPeople,
    EmojiNature,
    EmojiPlaces,
    EmojiFood,
    EmojiActivity,
    EmojiObjects,
    EmojiSymbols,
    EmojiFlags,
];

// Editor configuration.
FullInlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'emoji',
			'specialCharacters',
			'fontColor',
			'fontBackgroundColor',
			'link',
			'|',
			'numberedList',
			'bulletedList',
			'outdent',
			'indent',
			'alignment',
			'horizontalLine',
			'blockQuote',
			'insertTable',
			'|',
			'imageUpload',
			'mediaEmbed',
			'htmlEmbed',
			'|',
			'removeFormat',
			'undo',
			'redo'
		]
	},
	image: {
		styles: [
			'alignLeft', 'alignCenter', 'alignRight'
		],
		resizeOptions: [
			{
				name: 'resizeImage:original',
				label: '100%',
				value: null
			},
			{
				name: 'resizeImage:75',
				label: '75%',
				value: '75'
			},
			{
				name: 'resizeImage:50',
				label: '50%',
				value: '50'
			},
			{
				name: 'resizeImage:25',
				label: '25%',
				value: '25'
			},
		],
		toolbar: [
			'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
			'|',
			'resizeImage',
			'|',
			'linkImage',
			'|',
			'imageTextAlternative',
			'|',
			'insertImage',
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties', 
			'tableCellProperties',
		],
		tableProperties: {
			borderColors: colorPalette,
			backgroundColors: colorPalette,
		},
		tableCellProperties: {
			borderColors: colorPalette,
			backgroundColors: colorPalette,
		}

	},
	mediaEmbed: {
		previewsInData: true,
	},
	htmlEmbed: {
		showPreviews: true,
		sanitizeHtml: ( inputHtml ) => {
			const outputHtml = DOMPurify.sanitize( inputHtml );
			return {
				html: outputHtml,
				hasChanged: true
			};
		}
	},
	fontColor: {
		columns: 10,
		documentColors: 200,
		colors: colorPalette,
	},
	fontBackgroundColor: {
		columns: 10,
		documentColors: 200,
		colors: colorPalette,
	},
	fontSize: {
		options: [
			{
				title: '↓ 0.5',
				model: '0.5em',
		    },
			{
				title: '↓ 0.75',
				model: '0.75em',
		    },
			{
				title: '– 1',
				model: '1em',
		    },
			{
				title: '↑ 1.25',
				model: '1.25em',
		    },
			{
				title: '↑ 1.5',
				model: '1.5em',
		    },
			{
				title: '↑ 2',
				model: '2em',
		    },
			{
				title: '↑ 3',
				model: '3em',
		    },
			{
				title: '↑ 5',
				model: '5em',
		    },
		]
	},
	typing: {
		transformations: {
			remove: [
				'quotes',
			],
			extra: [
				...autoformatExtra()
			]
		}
	},
	licenseKey: '',
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

class BasicInlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
BasicInlineEditor.builtinPlugins = [
	TextTransformation,
    Autolink,
    Bold,
    Essentials,
    FontColor,
    Italic,
    Link,
    Paragraph,
    RemoveFormat,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Underline,
    WordCount,
    Emoji,
    EmojiPeople,
    EmojiNature,
    EmojiPlaces,
    EmojiFood,
    EmojiActivity,
    EmojiObjects,
    EmojiSymbols,
    EmojiFlags,
];

// Editor configuration.
BasicInlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'fontColor',
			'link',
			'|',
			'emoji',
			'specialCharacters',
			'|',
			'removeFormat',
			'undo',
			'redo'
		]
	},
	typing: {
		transformations: {
			remove: [
				'quotes',
			],
			extra: [
				...autoformatExtra()
			]
		}
	},
	licenseKey: '',
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

class SimpleInlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
SimpleInlineEditor.builtinPlugins = [
	Essentials,
	Paragraph,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	TextTransformation,
	WordCount,
	Emoji,
	EmojiPeople,
	EmojiNature,
	EmojiPlaces,
	EmojiFood,
	EmojiActivity,
	EmojiObjects,
	EmojiSymbols,
	EmojiFlags,
];

// Editor configuration.
SimpleInlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'emoji',
			'specialCharacters',
			'|',
			'undo',
			'redo'
		]
	},
	typing: {
		transformations: {
			remove: [
				'quotes',
			],
			extra: [
				...autoformatExtra()
			]
		}
	},
	licenseKey: '',
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

export default {
	FullInlineEditor,
	BasicInlineEditor,
	SimpleInlineEditor
}