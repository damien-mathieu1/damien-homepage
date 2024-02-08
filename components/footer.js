import { Box, Link } from '@chakra-ui/react'


const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Damien Mathieu. All Rights Reserved. Thanks to{' '} <Link href="https://www.craftz.dog/">Takuyama Mastuyama</Link>
    </Box>
  )
}

export default Footer
