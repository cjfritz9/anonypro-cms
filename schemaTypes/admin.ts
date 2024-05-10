const admin = {
  title: 'Admin',
  type: 'document',
  name: 'admin',
  hidden: false,
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Settings',
      hidden: ({currentUser}: {currentUser: any}) => currentUser.id !== 'pN0pAgxIk',
    },
    {
      name: 'icon',
      type: 'image',
      hidden: ({currentUser}: {currentUser: any}) => currentUser.id !== 'pN0pAgxIk',
    },
    {
      name: 'services',
      title: 'Enabled Services',
      description:
        'Use these toggles to turn services off or on. Changes take up to 30 minutes to take effect.',
      type: 'document',
      hidden: ({currentUser}: {currentUser: any}) => currentUser.role !== 'administrator',
      fields: [
        {
          name: 'stories',
          title: 'Stories',
          type: 'boolean',
          initialValue: false,
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'posts',
          title: 'Posts',
          type: 'boolean',
          initialValue: false,
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'highlights',
          title: 'Highlights',
          type: 'boolean',
          initialValue: false,
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'reels',
          title: 'Reels',
          type: 'boolean',
          initialValue: false,
          validation: (rule: any) => rule.required(),
        },
      ],
    },
  ],
}

export default admin
