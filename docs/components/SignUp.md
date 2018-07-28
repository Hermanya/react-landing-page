# Sign up

```.jsx
<Heading>Sign up to our Newsletter</Heading>
<SignUp onSubmit={(email) => alert(`got ${email}`)} mt={3}/>
```

Extends: [Flex](https://jxnblk.com/rebass/components/Flex)

| prop     | default | type             |
| -------- | ------- | ---------------- |
| onSubmit |         | function (email) |