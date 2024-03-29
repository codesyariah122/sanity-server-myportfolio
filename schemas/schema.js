// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// blog schema import
import blockContent from './blogs/blockContent'
import categoryBlog from './blogs/category'
import Tags from './blogs/tags'
import post from './blogs/post'
import author from './blogs/author'
import comment from './blogs/comment'

// docs schema import
import category from './docs/category'
import person from './docs/person'
import sampleProject from './docs/sampleProject'
import indieProject from './docs/indieProject'
import skillProgramming from './docs/skillProgramming'

// object schema
import bioPortableText from './obj/bioPortableText'
import figure from './obj/figure'
import gallery from './obj/gallery'
import links from './obj/links'
import projectMember from './obj/projectMember'
import contactInfo from './obj/contactInfo'
import projectPortableText from './obj/projectPortableText'
import indiePortableText from './obj/indiePortableText'
import simplePortableText from './obj/simplePortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'my portfolio',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    bioPortableText,
    figure,
    gallery,
    links,
    projectMember,
    projectPortableText,
    indiePortableText,
    simplePortableText,
    contactInfo,

    category,
    person,
    sampleProject,
    indieProject,
    skillProgramming,

    post,
    author,
    categoryBlog,
    comment,
    blockContent
  ]),
})
