
export const ASSETS = {
  LOGO: "https://lh3.googleusercontent.com/sitesv/AAzXCkfJoerLprl_OFswe9vL5l5wtrVINhw38oSvhXqD3KrxDExeCBCd6EaRXhB6ZGgZ7HEgnUeUuYEynuIaoQWxK8wNbR9ixCEFbv0HoWjoFrvBcOJnxKJW0_c2PPRG5E1hTJgkqhbhHAqoNyeeJjUj8yAshxXXd8WBxUxCF3fxWlhj1gOyNXMq02tbcYZtKnIjK844W-Jeuestc676Th1bk5Hwq1CXIdPYBtj2Hls=w1280",
  HERO: "https://lh3.googleusercontent.com/sitesv/AAzXCkexiK4OVaMyAh8SDNPBgmIsTjxgA1J8CXkOK1a1SwZdmVZJBPp2qglfP8cb4abiWk_rNKFm1flXup_G2MaSGA4fHinD9xheOV-Wk3CZ4sFMJsvVOeflFdnRT0dby97HL4CPQvXy4TNsqk1aiUaV_bQMlCwfA4OSsKP6SmIszQWlxBIsCBCLrDUicUUDyt3Fy2yJ5CvDqZ7DWwypiawFzCz82ZszeXOIInYX=w1280",
  BOOK_COVER: "https://lh3.googleusercontent.com/sitesv/AAzXCkeSBtlN0NQxr3gE9HC9AvVLXm3e3YhN4XmEGiDkbnB4K_yh9-q6-wZ1UjnI6vvpUiUb2cquNIxliZzpuKWAZKeL4amMnQ4uaOTuAmbzcr47cyiUrnusCiKtGkMX8CAp64HE8pHZD4M5SK7_a3YkRugvb_PsJ0DKveazRenlW4ChkBj_b3uLXnLX6oJWvTbDP4VmIZXGIOwVNNkxkpqvnHmy1-8xbjWO-8h5n9g=w1280",
  AUTHOR: "https://lh3.googleusercontent.com/sitesv/AAzXCkfWkJHGa0nL4kdwz0wFh293gkr_8gYteS0vfMpidYkhrh_TQbijlc1Dk-8LQQpsPK6JP_wZy92PiAdkQKaxTVI3kLdJmyPySjxcfq-XWZ1mBAFML9DE5t-22eam12TDJRoIMAAZNbuD21GSR8aYhabrrJfIKfaRTFRkPB3oEjxv9ajVeX4HRlZ8Wd0Z8NYiKOjSwVx8K-1byxsEv9g3pUnNa2Un8NX_zs-4ToI=w1280",
};

export interface Checklist {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const CHECKLISTS: Checklist[] = [
  {
    id: '01',
    title: 'The S.T.O.P. Protocol',
    description: 'A learned cognitive discipline designed to interrupt the stress response and establish a clear path forward.',
    tags: ['Mindset', 'Immediate'],
    imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkc03tk8I77bE6tz0H8irjCQzMC63cGZRrb2awYslI9ym1cXVmF1BRZVn9gKjLwbR953QQ6Kaur1Iq0eWAnzys0oQubEfg-A1tEq2dTtG6N5nUjKOt2H5BNbwy6Hwv_XipmUR_4LU16yuHlpiNQ-G-fXbjKs5RXMByvdPpvlB9Fu0EKL5eEXtwMIUro=w1280'
  },
  {
    id: '02',
    title: 'Cognitive Reset Matrix',
    description: 'Visualizing the psychological arc of a crisis to move from mental paralysis to decisive action.',
    tags: ['Psychology', 'Tactical'],
    imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkfvSSIm4FOlkhyNvGoyChkqlaRJboXDGq1hzyh_-VMz2O_gbh8d8HKg9Em2PkUe3C7zzrvfw_oBsBa6ZTO9A3w_dmMso_cVjEY_lLectTM6tVoMlrogEbrvQ27V_L5Ta0vqyOLd8X6KMPhKFPMkITPtk0wwyq6KI3GM44EqmdfnTYRKe6DHEhs9x-YabO3Cf4drB7fKmyxrc9MbgwmM9SDxyTnEheOnooBx=w1280'
  },
  {
    id: '03',
    title: 'MARCH Algorithm',
    description: 'Advanced trauma treatment protocol for massive hemorrhage, airway, and circulation management.',
    tags: ['Medical', 'Skills'],
    imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkc4Qp7ehUK2FyulYtXF2oDqi3Cm-pq9T0YoGCBG-uIS0KjJUsRnKPXtB_uRJGtAyD4gXdlFf_t9I5Ejmq1oz6dB3Lt6fZ_5EHQy6NDqRgNXcVXC5cKQmT6pKuCWq-0iMGwi_2x9nkSZvsfhE93Vq3wi1WUCFhgz_os9XnqitP6CJycTJRJFSNy3=w1280'
  }
];
