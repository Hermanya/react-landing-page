# Contributor

```.jsx
<Heading textAlign="center">Made by</Heading>
<Flex justifyContent="space-around">
    <Contributor
        fullName="Herman Starikov"
        title="developer"
        avatar="https://media.licdn.com/dms/image/C4D03AQHrQu7jWlkkmQ/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=ByDJmdnXciGKEyYXdfj4mA7WNEXCvTWhGfbFm4imqyI"
        >
        <Flex>
            <NavLink href='https://github.com/Hermanya'>GitHub</NavLink>
            <NavLink href='https://www.linkedin.com/in/hermanstarikov/'>LinkedIn</NavLink>
        </Flex>
    </Contributor>
</Flex>
```

Extends: [Box](https://jxnblk.com/rebass/components/Box)

| prop     | default                             | type   |
| -------- | ----------------------------------- | ------ |
| fullName | 'Anonymous'                         | string |
| title    | 'contributor'                       | string |
| avatar   | 'https://via.placeholder.com/64x64' | string |
| children |                                     | node   |