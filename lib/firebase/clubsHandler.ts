import { doc, getDoc } from "firebase/firestore";
import { db } from ".";
import { CLUBS_INFORMATION_COLLECTION_NAME } from "../helper";

export const fetchClubFullDetails = async (clubId: string) => {
  const clubDoc = doc(db, CLUBS_INFORMATION_COLLECTION_NAME, clubId);
  const clubInfo = await getDoc(clubDoc);

  if (!clubInfo.exists()) return null;

  const clubObj = {
    club_Id: clubInfo.id,
    club_Name: clubInfo.data()?.club_Name,
    club_Description: clubInfo.data()?.club_Description,
    club_Logo_Url: clubInfo.data()?.club_Logo_Url,
  };

  return clubObj;
};

export const fetchClubInfo = async (clubId: string) => {
  const clubDoc = doc(db, CLUBS_INFORMATION_COLLECTION_NAME, clubId);
  const clubInfo = await getDoc(clubDoc);

  if (!clubInfo.exists()) return null;
  const clubObj = {
    club_Id: clubInfo.id,
    club_Name: clubInfo.data()?.club_Name,
    club_Description: clubInfo.data()?.club_Description,
    club_Logo_Url: clubInfo.data()?.club_Logo_Url,
  };

  return clubObj;
};

export const createNewClubHandler = async (
    clubDetails: any
) => {

}