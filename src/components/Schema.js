import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Type: {
    id: 'Call to Action',
    defaultMessage: 'Call to Action',
  },
  Text: {
    id: 'Text',
    defaultMessage: 'Text',
  },
  Link: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  Icon: {
    id: 'Icon',
    defaultMessage: 'Icon',
  },
  IconRight: {
    id: 'Icon on the right',
    defaultMessage: 'Icon on the right',
  },
  Align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  Theme: {
    id: 'Theme',
    defaultMessage: 'Theme',
  },
  ThemePrimary: {
    id: 'Primary',
    defaultMessage: 'Primary',
  },
  ThemeSecondary: {
    id: 'Secondary',
    defaultMessage: 'Secondary',
  },
  ThemeLink: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  Inverted: {
    id: 'Inverted',
    defaultMessage: 'Inverted',
  },
  DefaultText: {
    id: 'Click here',
    defaultMessage: 'Click here',
  },
  Target: {
    id: 'Target',
    defaultMessage: 'Target',
  },
  TargetEmpty: {
    id: 'Open in this window / frame',
    defaultMessage: 'Open in this window / frame',
  },
  TargetBlank: {
    id: 'Open in new window',
    defaultMessage: 'Open in new window',
  },
  TargetParent: {
    id: 'Open in parent window / frame',
    defineMessages: 'Open in parent window / frame',
  },
  TargetTop: {
    id: 'Open in top frame (replaces all frames)',
    defaultMessage: 'Open in top frame (replaces all frames)',
  },
});

export const EditSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.Type),
  block: 'callToAction',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['text', 'href', 'target'],
    },
  ],

  properties: {
    text: {
      title: intl.formatMessage(messages.Text),
      default: intl.formatMessage(messages.DefaultText),
    },
    href: {
      title: intl.formatMessage(messages.Link),
      widget: 'object_browser',
      mode: 'link',
      selectedItemAttrs: ['Title', 'Description', 'hasPreviewImage'],
      allowExternals: true,
    },
    target: {
      title: intl.formatMessage(messages.Target),
      choices: [
        ['_self', intl.formatMessage(messages.TargetEmpty)],
        ['_blank', intl.formatMessage(messages.TargetBlank)],
        ['_parent', intl.formatMessage(messages.TargetParent)],
        ['_top', intl.formatMessage(messages.TargetTop)],
      ],
    },
  },
  required: [],
});

export const StylingSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.Type),
  block: 'callToAction',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['align', 'theme', 'inverted', 'icon', 'rightIcon'],
    },
  ],
  properties: {
    align: {
      title: intl.formatMessage(messages.Align),
      widget: 'align',
    },
    theme: {
      title: intl.formatMessage(messages.Theme),
      choices: [
        ['primary', intl.formatMessage(messages.ThemePrimary)],
        ['secondary', intl.formatMessage(messages.ThemeSecondary)],
        ['link', intl.formatMessage(messages.ThemeLink)],
      ],
      default: 'primary',
    },
    inverted: {
      title: intl.formatMessage(messages.Inverted),
      type: 'boolean',
    },
    icon: {
      title: intl.formatMessage(messages.Icon),
      default: 'chevron',
    },
    rightIcon: {
      title: intl.formatMessage(messages.IconRight),
      type: 'boolean',
    },
  },
  required: [],
});
