export type TravelProductPlanID = 1 | 2 | 84 | 85;

export type AccidentProductPlanID = 100 | 101 | 102 | 103 | 104;
export type AccidentPolicyTermID = 1 | 2 | 3 | 4;
export type AccidentOptionID = 1 | 2;

export type PaymentDetails = {
  NameOnCard: string,
  CardNumber: string,
  CardType: 2 | 3,
  CardSecurityCode: string,
  CardExpiryYear: number,
  CardExpiryMonth: number
};

export type PolicyHolder = {
  Surname: string,
  GivenName: string,
  IDNumber: string,
  IDNumberType: number,
  DateOfBirth: string,
  GenderID: number,
  MobileTelephone: string,
  Email: string,
  UnitNumber: string,
  BlockHouseNumber: string,
  BuildingName: string,
  StreetName: string,
  PostalCode: string
};

export type Traveller = {
  Surname: string,
  GivenName: string,
  IDNumber: string,
  IDNumberType: number,
  DateOfBirth: string,
  GenderID: number,
  RelationshipID: number
};

export type MUTraveller = {
  firstName: string,
  lastName: string,
  relationship: 1 | 2,
  gender: 1 | 2,
  idNumber: string,
  DOB: string
};

export type AccidentDetails = {
  ProductPlanID: AccidentProductPlanID,
  OccupationID: OccupationID,
  PolicyTermsID: AccidentPolicyTermID,
  OptionsID: AccidentOptionID
};

export type MobileDetails = {
  brandID: number,
  modelID: number,
  purchaseDate: string,
  serialNo: string,
  purchasePlaceID: number
};

export type OccupationID =
  | 2
  | 18
  | 19
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99
  | 100
  | 101
  | 102
  | 103
  | 104
  | 105
  | 106
  | 107
  | 108
  | 109
  | 110
  | 111
  | 112
  | 113
  | 114
  | 115
  | 116
  | 117
  | 118
  | 119
  | 120
  | 121
  | 122
  | 123
  | 124
  | 125
  | 126
  | 127
  | 128
  | 129
  | 130
  | 131
  | 132
  | 133
  | 134
  | 135
  | 136
  | 137
  | 138
  | 139
  | 140
  | 141
  | 142
  | 143
  | 144
  | 145
  | 146
  | 147
  | 148
  | 149
  | 150
  | 151
  | 152
  | 153
  | 154
  | 155
  | 156
  | 157
  | 158
  | 159
  | 160
  | 161
  | 162
  | 163
  | 164
  | 165
  | 166
  | 167
  | 168
  | 169
  | 170
  | 171
  | 172
  | 173
  | 174
  | 175
  | 176
  | 177
  | 178
  | 179
  | 180
  | 181
  | 182
  | 183
  | 184
  | 185
  | 186
  | 187
  | 188
  | 189;
