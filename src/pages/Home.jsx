import React from 'react';
import {
  AppSection,
  BlogSectionOld,
  BooksOld,
  CommunitySection,
  GetStartedOld,
  HeroSection,
  Libraries,
  LibrariesOld,
  MyLibraryCommunityOld,
  PostSectionOld,
  ReligiousSectionOld,
  StepsSection,
  TestimonialSection,
} from '../components';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <CommunitySection />
      <Libraries />
      <TestimonialSection />
      <AppSection />
      <BlogSectionOld />
      <PostSectionOld />
      <MyLibraryCommunityOld />
      <LibrariesOld />
      <GetStartedOld />
      <ReligiousSectionOld />
      <BooksOld />
    </>
  );
};

export default Home;
