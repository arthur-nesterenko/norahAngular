export const SEO_CONFIGURATION: Pages = {
  home: {
    seo: {
      title: '3D Animation Online Website: 3D Characters creation  - Norah.ai',
      description: 'Norah AI is a revolutionary, A.I. empowered workflow for generating games' +
      ' from the creation of 3D models and their animation to story weaving and texturing',
      keywords: 'norah.ai, 3d character creator, 3d animation maker, online 3d character creator'
    }
  },
  autoRigger: {
    seo: {
      title: 'Rig your 3D Characters Automatically | AutoRig - Norah.ai',
      description: 'Check out our Free Auto Rigging software and Rig your 3D models and characters.' +
      ' Place a few markers and get a ready-to-animate 3D character | Norah.ai',
      keywords: 'auto rigger, automatic rig, rigging software, rigged 3d models, character rig, norah.ai'
    }
  },
  repository: {
    seo: {
      title: 'Repository of 3D animated models - Norah.ai',
      description: 'Find the best selection of online Repository 3D models for instant download |' +
      ' Check out our library of locomotion, dance forms and combat animations | Norah.ai',
      keywords: '3D animation repository, 3d model repository, online 3d model repository, norah.ai'
    }
  },
  styleTransfer: {
    seo: {
      title: 'Blender animation tool for 3D animated models - Norah.ai',
      description: 'AI-powered 3d animation Blender | Mix and match existing animations ' +
      'to create your own personalized ones for generating games | Norah.ai',
      keywords: 'blender 3d models, AI-powered animation merger, blend 3d animations, mix 3d animations,' +
      ' best 3d modeling software, norah.ai'
    }
  },
  motionEditor: {
    seo: {
      title: 'Body animation Motion Editor tool for 3D models - Norah.ai',
      description: 'Discover How to use the Body animation Motion Editor tool |' +
      ' Create amazing customized new animations for your 3D Characters - Norah.ai',
      keywords: 'motion editor, 3d body animation tool, motion animation editor, norah.ai'
    }
  },
  myLibrary: {
    seo: {
      title: 'Library of animations - Norah.ai',
      description: 'Collect all the 3d animations you want in your own librabry | Norah.ai',
      keywords: 'norah.ai, library of animations'
    }
  },
  about: {
    seo: {
      title: 'AI revolutionary software to generate games - Norah.ai',
      description: 'Norah.ai Vision is to offer a AI powered ecosystem for interactive content' +
      ' creation of 3D models and their animation to story weaving and texturing for games',
      keywords: 'norah.ai, AI software for games, creation of 3D models, norah.ai vision'
    }
  },
  contactUs: {
    seo: {
      title: 'Contact our team of experts - Norah.ai',
      description: 'Leave us a message and we will answer soon all your questions and doubts about' +
      ' the creation of 3d models and characters | Norah.ai',
      keywords: 'norah.ai contact form, norah.ai contacts, message norah.ai'
    }
  }

};

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string;
}

export interface Pages {
  home: {
    seo: SeoConfig
  };
  autoRigger: {
    seo: SeoConfig
  };
  repository: {
    seo: SeoConfig
  };
  styleTransfer: {
    seo: SeoConfig
  };
  motionEditor: {
    seo: SeoConfig
  };
  myLibrary: {
    seo: SeoConfig
  };
  about: {
    seo: SeoConfig
  };
  contactUs: {
    seo: SeoConfig
  };
}
