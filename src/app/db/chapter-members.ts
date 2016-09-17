import { people } from './people';

function createChapterMember( id, chapterId, startDate, endDate, isActive ) {
  return {
    firstName: people[id].firstName,
    middleName: people[id].middleName,
    lastName: people[id].lastName,
    phone: people[id].phone,
    altPhone: people[id].altPhone,
    email: people[id].email,
    isUndead: people[id].isUndead,
    location: {
      address: people[id].location.address,
      address2: people[id].location.address2,
      city: people[id].location.city,
      stateProvince: people[id].location.stateProvince,
      postalCode: people[id].location.postalCode
    },
    id: id,
    chapterId: chapterId,
    startDate: startDate,
    endDate: endDate,
    isActive: isActive
  }
}

let chapterMembers = [
  createChapterMember( 1, 1, '2/3/1987', null, true ),
  createChapterMember( 2, 1, '7/8/1991', '11/15/15', false ),
  createChapterMember( 3, 1, '11/4/1993', null, true ),
  createChapterMember( 4, 1, '9/14/2002', null, true ),
  createChapterMember( 5, 2, '3/17/2001', null, true ),
  createChapterMember( 6, 2, '2/4/1997', null, true ),
  createChapterMember( 7, 2, '8/1/1988', null, true ),
  createChapterMember( 8, 3, '5/24/2003', null, true ),
  createChapterMember( 9, 3, '10/14/1991', '10/5/14', false ),
  createChapterMember( 10, 3, '2/11/1990', null, true ),
  createChapterMember( 11, 4, '3/4/1991', null, true ),
  createChapterMember( 12, 4, '8/14/1998', null, true ),
  createChapterMember( 13, 4, '9/3/1997', null, true ),
  createChapterMember( 14, 4, '4/27/2005', null, true ),
  createChapterMember( 15, 5, '10/23/1992', null, true ),
  createChapterMember( 16, 5, '12/4/1984', null, true ),
  createChapterMember( 17, 6, '10/13/1998', null, true ),
  createChapterMember( 18, 6, '3/19/2008', null, true ),
  createChapterMember( 19, 6, '9/13/2003', '12/1/15', false ),
  createChapterMember( 20, 7, '11/11/2009', null, true ),
  createChapterMember( 21, 7, '6/9/2000', null, true ),
  createChapterMember( 22, 7, '3/2/1998', null, true ),
  createChapterMember( 23, 8, '7/15/2011', null, true ),
  createChapterMember( 24, 8, '6/1/1994', null, true ),
  createChapterMember( 25, 8, '7/1/1991', null, true ),
  createChapterMember( 26, 9, '1/13/2003', null, true ),
  createChapterMember( 27, 9, '4/26/2004', '3/3/2016', false ),
  createChapterMember( 28, 9, '12/13/2012', null, true ),
  createChapterMember( 29, 9, '4/6/2008', null, true ),
  createChapterMember( 30, 9, '2/22/1999', null, true ),
  createChapterMember( 31, 10, '3/23/2010', null, true ),
  createChapterMember( 32, 10, '2/17/2001', null, true ),
  createChapterMember( 33, 10, '7/23/2002', null, true ),
  createChapterMember( 34, 10, '2/7/1997', null, true ),
  createChapterMember( 35, 10, '7/8/1995', '8/9/1999', false ),
  createChapterMember( 36, 10, '4/4/2001', null, true ),
  createChapterMember( 37, 10, '9/21/2004', null, true ),
  createChapterMember( 38, 1, '8/2/1996', null, true ),
  createChapterMember( 39, 1, '11/2/1988', null, true ),
  createChapterMember( 40, 2, '5/5/1993', null, true ),
];

export { chapterMembers }
