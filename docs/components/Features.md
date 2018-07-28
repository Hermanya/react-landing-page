# Feature

```.jsx
<Heading textAlign="center">What is inside?</Heading>
<Flex flexWrap="wrap" justifyContent="center">
    <Feature icon="👋" description="What your users see first">
        Hero
    </Feature>
    <Feature icon="🔥" description="What your app can do">
        Features
    </Feature>
    <Feature icon="📩" description="How to keep in touch">
        Sign Up
    </Feature>
</Flex>
```

Extends: [Box](https://jxnblk.com/rebass/components/Box)

| prop        | default       | type        |
| ----------- | ------------- | ----------- |
| icon        | '🔥'          | string/node |
| description | 'description' | string      |
| children    | 'Feature'     | string/node |